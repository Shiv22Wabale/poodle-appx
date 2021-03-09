// const React = lib.react
import React from 'react'
//import { SvgIcon } from '@material-ui/core'
import {default as Icon} from '@ant-design/icons'

const BranchSvg = () => {
  return (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
      <path d="M217.142857 337.152l39.424-51.437714c103.716571 66.432 217.709714 215.588571 217.709714 318.427428v245.997715c0 29.568 13.293714 45.44 37.723429 45.44 24.009143 0 37.302857-15.872 37.302857-45.44V604.16c0-101.577143 111.835429-248.996571 215.990857-317.147429l36.425143 49.737143c17.993143 24.832 39.862857 19.273143 48.859429-8.594285l53.997714-157.714286c7.716571-23.131429-4.717714-39.424-28.288-39.003429l-167.131429 2.578286c-28.726857 0.438857-40.722286 19.291429-23.149714 43.702857l34.706286 47.579429c-100.717714 70.710857-195.419429 196.717714-208.274286 261.430857h-1.28c-12.873143-65.133714-107.154286-190.72-207.872-261.430857l33.426286-43.702857c18.852571-24.009143 7.277714-43.282286-21.430857-44.580572l-167.131429-7.277714c-23.588571-1.28-36.443429 14.573714-29.586286 38.144l49.737143 158.994286c8.557714 28.288 29.988571 34.706286 48.841143 10.294857z" p-id="28860"></path>
    </svg>
  )
}

const Branch = (props) => {
  return (
    <Icon component={BranchSvg} {...props} />
  )
}

// export SVG
Branch.SVG = BranchSvg

export { BranchSvg as SVG }

export default Branch
