// const React = lib.react
import React from 'react'
//import { SvgIcon } from '@material-ui/core'
import {default as Icon} from '@ant-design/icons'

const CssSvg = () => {
  return (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path d="M192 96v224h64V160h512v160h64V96H192z m112 288A79.904 79.904 0 0 0 224 464v96C224 604.256 259.744 640 304 640s80-35.744 80-80V544h-64v16c0 6.944-9.056 16-16 16-6.944 0-16-9.056-16-16v-96c0-6.944 9.056-16 16-16 6.944 0 16 9.056 16 16v16h64v-16c0-44.256-35.744-80-80-80z m192 0a79.904 79.904 0 0 0-80 80c0 44.256 35.744 80 80 80 6.944 0 16 9.056 16 16 0 9.6-3.808 16-16 16-11.776 0-13.568-2.56-14.016-3.008-0.416-0.416-1.984-2.528-1.984-9.984h-64c0 18.112 5.216 38.432 20 53.984 14.784 15.584 36.576 23.008 60 23.008 45.408 0 80-38.4 80-80 0-44.256-35.744-80-80-80-6.944 0-16-9.056-16-16 0-6.944 9.056-16 16-16 8.544 0 11.136 2.016 12.992 4a13.44 13.44 0 0 1 3.008 8.992h64c0-18.816-6.88-38.176-20.992-52.992-14.144-14.816-35.52-24-59.008-24z m192 0a79.904 79.904 0 0 0-80 80c0 44.256 35.744 80 80 80 6.944 0 16 9.056 16 16 0 9.6-3.808 16-16 16-11.776 0-13.568-2.56-14.016-3.008-0.416-0.416-1.984-2.528-1.984-9.984h-64c0 18.112 5.216 38.432 20 53.984 14.784 15.584 36.576 23.008 60 23.008 45.408 0 80-38.4 80-80 0-44.256-35.744-80-80-80-6.944 0-16-9.056-16-16 0-6.944 9.056-16 16-16 8.544 0 11.136 2.016 12.992 4a13.44 13.44 0 0 1 3.008 8.992h64c0-18.816-6.88-38.176-20.992-52.992-14.144-14.816-35.52-24-59.008-24zM192 704v224h640v-224h-64v160H256v-160H192z" p-id="34389"></path>
    </svg>
  )
}

const Css = (props) => {
  return (
    <Icon component={CssSvg} {...props} />
  )
}

// export SVG
Css.SVG = CssSvg

export { CssSvg as SVG }

export default Css