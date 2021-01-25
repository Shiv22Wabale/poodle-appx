// const React = lib.react
import React from 'react'
//import { SvgIcon } from '@material-ui/core'
import {default as Icon} from '@ant-design/icons'

const PreviewSvg = () => {
  return (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
      <path d="M512 251.853c192.768 0 358.707 113.1 436.378 276.275H1024c-82.022-202.394-280.218-345.293-512-345.293S82.022 325.735 0 528.128h75.674C153.344 364.954 319.284 251.853 512 251.853z m0 552.55c-192.717 0-358.656-113.05-436.326-276.275H0c82.022 202.445 280.166 345.344 512 345.344s430.029-142.9 512-345.344h-75.674C870.707 691.354 704.768 804.403 512 804.403zM327.834 528.128a184.115 184.115 0 1 0 368.281 0.051 184.115 184.115 0 0 0-368.281-0.051z m299.315 0a115.2 115.2 0 1 1-230.298 0 115.2 115.2 0 0 1 230.298 0z m0 0" p-id="1513"></path>
    </svg>
  )
}

const Preview = (props) => {
  return (
    <Icon component={PreviewSvg} {...props} />
  )
}

// export SVG
Preview.SVG = PreviewSvg

export { PreviewSvg as SVG }

export default Preview
