const fs = require('fs')
//const acorn = require("acorn")
//const jsx = require("acorn-jsx")
//const escodegen = require('escodegen')
//const { clone, cloneDeep } = require('lodash') // Import the clone, cleanDeep
//const babel = require('@babel/standalone')
const babel = require('@babel/core')
const t = require("@babel/types")
// console.log(t)


////////////////////////////////////////////////////////////////////////////////
// import maps
const default_import_maps = {
  imports: {
    "app-x/": "http://localhost:3001/",
    "self/": "http://localhost:3001/ui/sys/appx/base/current/"
  },
  libs: {
    "main": {
      path: "../dist/lib/main.js",
      modules: [
        "react",
        "react-dom",
        "prop-types",
        "reflectPropTypes",
        "react-redux",
        "redux",
        "hookrouter",
        "react-router",
        "react-router-dom",
        "react-helmet",
        "react-feather",
        "clsx",
        "lodash",
        "axios",
      ]
    },
    "material": {
      path: "../dist/lib/material.js",
      modules: [
        "@material-ui/core",
        "@material-ui/icons",
        "@material-ui/styles",
      ]
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// parse arguments
const { ArgumentParser } = require('argparse')
const parser = new ArgumentParser({
  description: 'transform import statement'
})

parser.add_argument('-f', '--filepath', { help: 'javascript code filepath' })
args = parser.parse_args()

// validate template file
if (!fs.existsSync(args.filepath)) {
    console.error("ERROR: filepath does NOT exist [" + args.filepath + "] !")
    process.exit(1)
}

let code = fs.readFileSync(args.filepath, 'utf8')

////////////////////////////////////////////////////////////////////////////////
let globalImports = {}

function importMapPlugin(import_maps) {

  return {

    visitor: {

      Program:{
        //path.get('body').unshiftContainer('body', Object.keys(globalImports).map(importKey => {
        //  globalImports[importKey]
        //}))
        exit(path, state) {
          //console.log(`exit`)
          Object.keys(globalImports).map(importKey => {
            let module_path = globalImports[importKey]
            path.unshiftContainer(
              'body',
              t.importDeclaration(
                [
                  t.importSpecifier(
                    t.identifier('default'),
                    t.identifier(importKey)
                  )
                ],
                t.stringLiteral(module_path)
              )
            )
          })
        }
      },

      ImportDeclaration(path) {
        // in this example change all the variable `n` to `x`
        if (path.isImportDeclaration()) {

          let src_val = path.node.source.value

          // do not transform relative path
          if (src_val.startsWith('.') || src_val.startsWith('/')) {
            return
          }

          let found = false

          // check 'imports'
          Object.keys(import_maps.imports).map(key => {
            if (found) {
              return
            } else if (src_val == key) {
              found = true
              path.node.source.value = import_maps.imports[key]
            } else if (key.endsWith('/') && src_val.startsWith(key)) {
              found = true
              path.node.source.value = import_maps.imports[key] + src_val.substring(key.length)
            }
          })

          // check 'libs'
          if (!found) {
            Object.keys(import_maps.libs).map(lib_key => {
              const lib = import_maps.libs[lib_key]
              if (found) {
                return
              } else if (lib.modules) {
                lib.modules.map(module_name => {

                  if (found) {

                    return

                  } else if (src_val.startsWith(module_name)) {

                    found = true

                    // add lib.path to global imports
                    globalImports[lib_key] = lib.path
                    //console.log(globalImports)

                    path.replaceWith(
                      t.variableDeclaration('const', [
                        t.variableDeclarator(

                          t.objectPattern(

                            path.node.specifiers.map(specifier => {
                              if (specifier.type == 'ImportDefaultSpecifier') {
                                return t.objectProperty(
                                  t.identifier('default'),
                                  t.identifier(specifier.local.name),
                                )
                              } else {
                                return t.objectProperty(
                                  t.identifier(specifier.imported.name),
                                  t.identifier(specifier.local.name),
                                )
                              }
                            })
                          ),

                          t.memberExpression(
                            t.identifier(lib_key),
                            t.stringLiteral(module_name),
                            true
                          )
                        ),
                      ])
                    );
                  }
                })
              }
            })
          }

          if (!found) {
            throw new Error('ERROR: import cannot be resolved [' + src_val + '].')
          }
        }
      }
    }
  }
}

const converted = babel.transform(code, {
  plugins: [
    importMapPlugin(default_import_maps)
  ]
})

console.log('------------------------------')
console.log(converted.code)
console.log('------------------------------')
