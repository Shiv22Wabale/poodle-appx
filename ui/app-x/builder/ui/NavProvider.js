import React, { useState, useEffect } from 'react'
import {
  notification
} from 'antd'
import * as api from 'app-x/api'

const PATH_SEPARATOR = '/'
const VARIABLE_SEPARATOR = '.'

const NavContext = React.createContext()

let serviceWorkerInitiated = false
const listeners = {}

// register import maps, returns promise
function registerImportMaps(basePath, importMaps) {
  if (!navigator.serviceWorker.controller) {
    throw new Error(`ERROR: controller not found`)
  }
  // add serviceWorker event listener
  if (!serviceWorkerInitiated) {
    // handle importMaps message
    navigator.serviceWorker.addEventListener('message', function(event) {
      if (event.data.type !== 'importMaps') {
        return
      }
      // console.log(`INFO: Received importMaps message [${JSON.stringify(event.data)}]`)
      // check all listeners
      for (let listener of Object.keys(listeners)) {
        if (event.data.basePath === listener) {
          listeners[listener](event)
        }
      }
    })
    // listener initialized
    serviceWorkerInitiated = true
  }
  // return promise for async/await
  return new Promise((resolve, reject) => {
    listeners[basePath] = function(event) {
      if (event.data.status === 'ok') {
        // console.log(`INFO: registered [${basePath}] [${JSON.stringify(importMaps)}]`)
        resolve(event)
      } else {
        reject(event)
      }
    }
    // register import maps
    // console.log(`INFO: registering [${basePath}] [${JSON.stringify(importMaps)}]`)
    navigator.serviceWorker.controller.postMessage({
      type: 'importMaps',
      basePath: basePath,
      importMaps: importMaps
    })
  })
}

const NavProvider = (() => {

  const f = (props) => {

    // deployment
    const [ navDeployment,    setNavDeployment    ] = useState({
      namespace: null,
      ui_name: null,
      ui_ver: null,
      ui_deployment: null,
    })

    // ui_component
    const [ navComponent,     setNavComponent     ] = useState({
      ui_component_name: null,
      ui_component_type: null,
      ui_component_spec: null,
    })

    // ui_component
    const [ navRoute,         setNavRoute         ] = useState({
      ui_route_name: null,
      ui_route_spec: null,
    })

    // selected object
    const [ navSelected,      setNavSelected      ] = useState({
      type: null,         // ui_component or ui_route
    })

    // self import names
    const [ selfImportNames,  setSelfImportNames  ] = useState([])
    // load self import data
    useEffect(async () => {
      /*
      if (!globalThis.appx?.SELF) {
        throw new Error(`ERROR: appx.SELF not set`)
      }
      */
      if (
        !!navDeployment
        && navDeployment.namespace
        && navDeployment.ui_name
        && navDeployment.ui_deployment
      ) {
        try {
          const { namespace, ui_name, ui_deployment, ui_ver } = navDeployment
          const ui_app = await api.get_async(
            'sys',
            'appx',
            `/namespace/${namespace}/ui/${ui_name}/${ui_ver}`
          )
          if (!ui_app || !ui_app.length || !ui_app[0].ui_spec || !ui_app[0].ui_spec.importMaps) {
            throw new Error(`Unable to retrieve ui_spec`)
          }
          // import maps
          const IMPORT_MAPS = ui_app[0].ui_spec.importMaps
          // base path
          const basePath = `${globalThis.appx.UI_ROOT}/${namespace}/${ui_name}/${ui_deployment}/`
          const baseElemPath = basePath + '_elem/'
          // update import maps
          IMPORT_MAPS.imports = Object.assign({}, IMPORT_MAPS.imports, { 'self/': baseElemPath })
          IMPORT_MAPS.origin = window.location.origin
          // update import maps
          for (const lib_key of Object.keys(IMPORT_MAPS.libs)) {
            const lib_path = IMPORT_MAPS.libs[lib_key].path
            const lib_module = await import(lib_path)
            // console.log(`lib_module.default`, lib_module.default)
            IMPORT_MAPS.libs[lib_key].modules = Object.keys(lib_module.default)
          }
          // register import maps
          await registerImportMaps(basePath, IMPORT_MAPS)
          // now get list of ui_component
          const result = await api.get_async(
            'sys',
            'appx',
            `/namespace/${namespace}/ui_deployment/ui/${ui_name}/deployment/${ui_deployment}/ui_component`
          )
          const processed = []
          for (const row of result.filter(data => data.ui_component_type === 'react/component' || data.ui_component_type === 'react/provider'))
          {
            try {
              const path_module = await import((`${globalThis.appx.UI_ROOT}/${namespace}/${ui_name}/${ui_deployment}/_elem/${row.ui_component_name}`).replace(/\/+/g, '/'))
              if (!!path_module.default) {
                const module_name = `self/${row.ui_component_name}`.replace(/\/+/g, '/')
                processed.push(module_name)
                Object.keys(path_module.default)
                  .filter(variable_name => !variable_name.startsWith('$'))
                  .filter(variable_name => variable_name !== 'Test')
                  .map(variable_name => {
                    processed.push(module_name + VARIABLE_SEPARATOR + variable_name)
                  })
              } else {
                Object.keys(path_module)
                  .filter(variable_name => !variable_name.startsWith('$'))
                  .filter(variable_name => variable_name !== 'Test')
                  .map(variable_name => {
                    processed.push(module_name + VARIABLE_SEPARATOR + variable_name)
                  })
              }
            } catch (error) {
              console.error(error)
              notification.error({
                message: `Failed to load SELF component [${row.ui_component_name}]`,
                description: typeof error === 'object' ? JSON.stringify(error) : String(error),
                placement: 'bottomLeft',
              })
            }
          }
          // update selfImportNames
          console.log(`selfImportNames`, processed)
          setSelfImportNames(processed)
        } catch (error) {
          console.error(error)
          setSelfImportNames([])
          notification.error({
            message: `Failed to load SELF component list`,
            description: typeof error === 'object' ? JSON.stringify(error) : String(error),
            placement: 'bottomLeft',
          })
        }
      } else {
        setSelfImportNames([])
      }
    }, [navDeployment])

    return (
      <NavContext.Provider
        value={{
          navDeployment,
          setNavDeployment,
          navComponent,
          setNavComponent,
          navRoute,
          setNavRoute,
          navSelected,
          setNavSelected,
          selfImportNames,
          setSelfImportNames,
        }}
      >
        {props.children}
      </NavContext.Provider>
    )
  }

  // update Context variable
  f.Context = NavContext

  return f
}) ()

export { NavContext as Context }

export default NavProvider
