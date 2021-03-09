// const React = lib.react
import React from 'react'
//import { SvgIcon } from '@material-ui/core'
import {default as Icon} from '@ant-design/icons'

const RouterSvg = () => {
  return (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
      <path d="M381.269333 90.794667c-15.701333 0-28.672 12.629333-28.672 28.672v192.853333l-303.786666-303.786667c-11.264-11.264-29.354667-11.264-40.277334 0-11.264 11.264-11.264 29.354667 0 40.277334l303.786667 303.786666h-192.853333c-15.701333 0-28.672 12.629333-28.672 28.672 0 15.701333 12.629333 28.672 28.672 28.672h261.802666c3.754667 0 7.509333-0.682667 10.922667-2.048 7.168-2.730667 12.629333-8.533333 15.36-15.36 1.365333-3.413333 2.048-7.168 2.048-10.922666v-261.802667c0.341333-16.384-12.288-29.013333-28.330667-29.013333zM361.130667 622.933333l-303.786667 303.786667V733.866667c0-15.701333-12.629333-28.672-28.672-28.672-15.701333 0-28.672 12.629333-28.672 28.672v261.802666c0 3.754667 0.682667 7.509333 2.048 10.922667 2.730667 7.168 8.533333 12.629333 15.36 15.36 3.413333 1.365333 7.168 2.048 10.922667 2.048h261.802666c15.701333 0 28.672-12.629333 28.672-28.672 0-15.701333-12.629333-28.672-28.672-28.672h-192.853333l303.786667-303.786667c11.264-11.264 11.264-29.354667 0-40.277333-10.581333-10.922667-28.672-10.922667-39.936 0.341333zM712.362667 671.402667h192.853333c15.701333 0 28.672-12.629333 28.672-28.672 0-15.701333-12.629333-28.672-28.672-28.672h-261.802667c-3.754667 0-7.509333 0.682667-10.922666 2.048-7.168 2.730667-12.629333 8.533333-15.36 15.36-1.365333 3.413333-2.048 7.168-2.048 10.922666v261.802667c0 15.701333 12.629333 28.672 28.672 28.672 15.701333 0 28.672-12.629333 28.672-28.672v-192.853333l303.786666 303.786666c11.264 11.264 29.354667 11.264 40.277334 0 11.264-11.264 11.264-29.354667 0-40.277333l-304.128-303.445333zM1022.293333 17.749333c-2.730667-7.168-8.533333-12.629333-15.36-15.36-3.413333-1.365333-7.168-2.048-10.922666-2.048H734.208c-15.701333 0-28.672 12.629333-28.672 28.672 0 15.701333 12.629333 28.672 28.672 28.672h192.853333l-303.786666 303.786667c-11.264 11.264-11.264 29.354667 0 40.277333 11.264 11.264 29.354667 11.264 40.277333 0l303.786667-303.786666v192.853333c0 15.701333 12.629333 28.672 28.672 28.672 15.701333 0 28.672-12.629333 28.672-28.672v-261.802667c-0.341333-4.096-1.024-7.850667-2.389334-11.264z" p-id="10802"></path>
    </svg>
  )
}

const Router = (props) => {
  return (
    <Icon component={RouterSvg} {...props} />
  )
}

// export SVG
Router.SVG = RouterSvg

export { RouterSvg as SVG }

export default Router
