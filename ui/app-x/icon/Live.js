// const React = lib.react
import React from 'react'
//import { SvgIcon } from '@material-ui/core'
import {default as Icon} from '@ant-design/icons'

const LiveSvg = () => {
  return (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
      <path d="M255.573333 210.304a32 32 0 0 1 0 45.226667 362.666667 362.666667 0 0 0 0 512.896 32 32 0 0 1-45.269333 45.269333c-166.613333-166.613333-166.613333-436.778667 0-603.392a32 32 0 0 1 45.226667 0z m558.122667 0c166.613333 166.613333 166.613333 436.778667 0 603.392a32 32 0 0 1-45.226667-45.226667 362.666667 362.666667 0 0 0 0-512.896 32 32 0 1 1 45.226667-45.269333zM376.234667 330.965333a32 32 0 0 1 0 45.269334 192 192 0 0 0 0 271.530666 32 32 0 0 1-45.226667 45.226667 256 256 0 0 1 0-362.026667 32 32 0 0 1 45.226667 0z m316.8 0a256 256 0 0 1 0 362.069334 32 32 0 1 1-45.269334-45.269334 192 192 0 0 0 0-271.530666 32 32 0 0 1 45.226667-45.226667zM512 448a64 64 0 1 1 0 128 64 64 0 0 1 0-128z" p-id="33347"></path>
    </svg>
  )
}

const Live = (props) => {
  return (
    <Icon component={LiveSvg} {...props} />
  )
}

// export SVG
Live.SVG = LiveSvg

export { LiveSvg as SVG }

export default Live
