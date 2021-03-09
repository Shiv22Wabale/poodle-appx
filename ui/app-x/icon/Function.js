// const React = lib.react
import React from 'react'
//import { SvgIcon } from '@material-ui/core'
import {default as Icon} from '@ant-design/icons'

const FunctionSvg = () => {
  return (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
      <path d="M889.344 752.384c-1.792 6.272-9.856 10.624-20.544 16.384-11.584 6.08-21.632 5.504-28.8 3.52-6.976-2.048-13.248-6.656-18.496-13.632l-96.256-127.36-116.8 126.72c-13.952 15.104-29.76 17.344-47.808 6.656-7.424-4.352-20.992-20.48-22.592-27.776-1.536-7.232 1.344-14.848 8.768-22.976l129.152-140.544L581.888 448.896C577.984 443.2 577.6 436.544 580.672 428.992c2.944-7.552 9.92-12.032 17.344-16.448 10.688-6.016 20.48-6.208 27.712-5.632C633.024 407.36 639.616 411.52 645.696 419.2l78.208 101.952 94.656-103.104C826.752 408.96 836.032 405.76 844.992 403.2c8.896-2.56 26.496 6.656 36.096 12.032 9.856 5.312 14.976 11.456 15.616 18.368 0.576 6.912-2.112 13.696-8.256 20.416l-115.648 125.44 114.112 156.48C890.496 740.608 891.392 746.24 889.344 752.384zM592.128 128.576C552 124.032 467.968 118.016 417.024 150.976 365.952 184.064 336.64 240.896 322.432 308.48L302.4 403.968 158.592 403.968c-16.704 0-30.016 4.8-31.424 34.752 1.408 16.32 14.72 29.248 31.424 29.248L288.64 467.968l-85.696 418.688c0 0-21.952 68.288 26.048 71.296 41.92 2.624 50.24-65.6 50.24-65.6l86.4-424.384 109.76 0c17.664 0 32-14.336 32-32s-14.336-32-32-32L379.264 403.968l19.008-93.568C438.912 161.28 514.688 197.504 584.704 197.504c11.456 0 54.656 3.008 57.664-26.56C646.208 133.952 609.024 130.496 592.128 128.576zM126.592 443.392c0-1.92 0.448-2.88 0.576-4.608C127.04 437.824 126.592 436.992 126.592 435.968L126.592 443.392z" p-id="21273"></path>
    </svg>
  )
}

const Function = (props) => {
  return (
    <Icon component={FunctionSvg} {...props} />
  )
}

// export SVG
Function.SVG = FunctionSvg

export { FunctionSvg as SVG }

export default Function


/*
<path d="M247.21194 1019.542289c-96.836776 0-148.48-89.108378-163.722826-141.714468a43.583682 43.583682 0 0 1 83.738747-24.209194c0.163025 0.534925 24.321274 78.909134 80.091064 78.909134 36.502289 0 54.378985-48.530468 56.742846-55.39789 6.388537-26.303045 64.145194-265.506388 108.859861-446.835901H282.104358a43.532736 43.532736 0 1 1 0-87.065472h152.346746c14.330905-57.389851 25.335085-100.224637 29.522787-114.127602l3.489751-11.865155C488.025154 146.91598 530.85994 0.636816 644.982448 0.636816c100.815602 0 135.168 100.382567 139.248716 153.416597a43.558209 43.558209 0 0 1-86.856597 6.872517c-0.264915-3.382766-7.030448-73.167602-52.392119-73.167602-48.846328 0-80.519005 107.90209-93.943085 153.956617l-3.698627 12.34404c-3.275781 11.116259-11.651184 43.588776-23.083303 89.113473h106.231084a43.558209 43.558209 0 1 1 0 87.121512H502.62607a102108.694925 102108.694925 0 0 0-114.881592 470.989055c-12.991045 43.914826-57.165692 118.259264-140.425553 118.259264h-0.10189z m645.777194-112.247722c-20.240557 0-34.413532-9.445254-47.939502-26.303045l-72.897592-95.868816-72.841552 95.817871c-12.135164 14.870925-26.303045 26.303045-44.556737 26.303045-26.95005 0-47.883463-18.844657-47.883462-44.556736 0-14.111841 5.369632-24.907144 14.172975-35.050349l92.435104-109.292895-84.329711-97.162826c-11.488159-13.52597-16.857791-25.661134-16.857791-39.187105 0-28.987861 21.580418-47.236458 47.241552-47.236457 20.235463 0 34.352398 9.501294 47.883463 26.303045l66.779064 89.103283 68.169871-89.052338c12.186109-14.865831 26.303045-26.303045 44.556736-26.303045 27.000995 0 47.883463 18.844657 47.883463 44.556736 0 14.116935-6.062488 24.963184-14.116935 35.050349l-87.824558 102.532457 90.397294 103.979304c11.488159 13.46993 16.913831 25.65604 16.913831 39.131064 0 28.987861-21.580418 47.236458-47.241552 47.236458h0.050945z" p-id="40077"></path>

<path d="M617.6 213.2l-25.4-18.2c-7.2-5.2-17.2-3.6-22.4 3.6-79.8 113.8-122 244-122 377.4s42.2 263.6 122 377.4c5 7.2 15.2 8.8 22.4 3.6l25.4-18.2c6.8-5 8.4-14.4 3.4-21.2-72.4-103.2-110.4-221-110.4-341.6s38.2-238.2 110.4-341.6c5-6.8 3.6-16.2-3.4-21.2zM448 80c0-8.8-7.2-16-16-16h-112c-88.4 0-160 71.6-160 160v160H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h144v288c0 53-43 96-96 96H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48c88.4 0 160-71.6 160-160V448h144c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-144v-160c0-53 43-96 96-96h112c8.8 0 16-7.2 16-16z m710 118.6c-5-7.2-15.2-8.8-22.4-3.6l-25.4 18.2c-6.8 5-8.4 14.4-3.4 21.2 72.4 103.2 110.4 221 110.4 341.6s-38.2 238.2-110.4 341.6c-4.8 7-3.4 16.4 3.4 21.2l25.4 18.2c7.2 5.2 17.4 3.6 22.4-3.6 79.8-113.8 122-244 122-377.4s-42.2-263.6-122-377.4z m-138.6 244.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6 0l-110 110-110-110c-6.2-6.2-16.4-6.2-22.6 0l-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6l110 110-110 110c-6.2 6.2-6.2 16.4 0 22.6l22.6 22.6c6.2 6.2 16.4 6.2 22.6 0l110-110 110 110c6.2 6.2 16.4 6.2 22.6 0l22.6-22.6c6.2-6.2 6.2-16.4 0-22.6l-110-110 110-110c6.2-6.2 6.2-16.2 0-22.6z" p-id="23012"></path>

<path d="M448 96c0-17.68-14.32-32-32-32h-96c-97.2 0-176 78.8-176 176v96H32c-17.68 0-32 14.32-32 32v32c0 17.68 14.32 32 32 32h112v288c0 44.18-35.82 80-80 80H32c-17.68 0-32 14.32-32 32v32c0 17.68 14.32 32 32 32h32c97.2 0 176-78.8 176-176V432h112c17.68 0 32-14.32 32-32v-32c0-17.68-14.32-32-32-32h-112v-96c0-44.18 35.82-80 80-80h96c17.68 0 32-14.32 32-32V96z m186.86 121.84l-25.6-19.26c-14.44-10.88-35.62-8.02-45.84 6.82C488.78 314 448 444.34 448 576c0 131.7 40.78 262.04 115.42 370.6 10.22 14.86 31.4 17.7 45.84 6.82l25.6-19.26c13.68-10.28 16.18-29.08 6.56-43.18C578.4 798.54 544 687.84 544 576c0-111.82 34.4-222.52 97.42-315 9.6-14.1 7.1-32.88-6.56-43.16z m529.72-12.44c-10.22-14.86-31.4-17.7-45.84-6.82l-25.6 19.26c-13.68 10.28-16.18 29.08-6.56 43.18C1149.6 353.46 1184 464.16 1184 576c0 111.82-34.4 222.52-97.42 315-9.6 14.1-7.1 32.88 6.56 43.18l25.6 19.26c14.44 10.88 35.62 8.04 45.84-6.82C1239.22 838 1280 707.66 1280 576c0-131.7-40.78-262.04-115.42-370.6z m-149.68 241.68l-21.98-21.98c-12.14-12.14-31.82-12.14-43.96 0L864 510.06l-84.94-84.94c-12.14-12.14-31.82-12.14-43.96 0l-21.98 21.98c-12.14 12.14-12.14 31.82 0 43.96L798.06 576l-84.94 84.94c-12.14 12.14-12.14 31.82 0 43.96l21.98 21.98c12.14 12.14 31.82 12.14 43.96 0L864 641.94l84.94 84.94c12.14 12.14 31.82 12.14 43.96 0l21.98-21.98c12.14-12.14 12.14-31.82 0-43.96L929.94 576l84.94-84.94c12.16-12.14 12.16-31.84 0.02-43.98z" p-id="22880"></path>


<path d="M510.665143 801.536c13.037714 0 22.253714-7.296 22.253714-20.333714 0-5.76-1.536-8.832-5.76-16.896-46.811429-72.502857-73.289143-155.757714-73.289143-245.924572 0-87.094857 24.941714-174.189714 73.289143-247.076571 4.205714-8.045714 5.76-11.117714 5.76-16.877714 0-12.288-9.216-20.333714-22.253714-20.333715-12.672 0-23.04 5.741714-35.291429 22.637715-57.563429 73.270857-86.710857 164.571429-86.710857 261.266285s27.995429 185.307429 86.692572 260.900572c12.288 16.877714 22.637714 22.637714 35.291428 22.637714z m391.716571 0c12.653714 0 22.637714-5.76 34.925715-22.637714C995.986286 703.305143 1024 614.692571 1024 517.997714c0-96.676571-28.781714-187.977143-86.710857-261.266285-12.269714-16.896-22.253714-22.637714-34.907429-22.637715-13.037714 0-22.253714 8.045714-22.253714 20.333715 0 5.76 1.152 8.813714 5.376 16.877714 48.731429 72.886857 73.654857 160 73.654857 247.076571 0 90.148571-26.843429 173.421714-73.270857 245.942857-4.608 8.045714-5.76 11.117714-5.76 16.877715 0 12.269714 9.216 20.333714 22.253714 20.333714z m-850.578285-0.768c75.190857 0 110.098286-32.237714 128.128-118.564571l43.739428-209.865143h69.449143c22.253714 0 36.443429-11.885714 36.443429-31.085715 0-16.475429-10.733714-26.843429-28.379429-26.843428h-64.841143l10.733714-52.169143c9.984-48.731429 25.325714-68.681143 67.913143-68.681143 6.144 0 12.269714-0.384 16.493715-0.768 19.2-1.92 27.611429-10.752 27.611428-27.245714 0-21.485714-18.011429-31.085714-54.857143-31.085714-73.270857 0-110.866286 36.461714-127.744 118.564571l-13.056 61.385143H115.858286c-22.235429 0-36.827429 11.885714-36.827429 31.085714 0 16.493714 11.136 26.843429 28.781714 26.843429h43.337143L108.982857 673.005714C98.194286 723.254857 82.468571 741.668571 41.435429 741.668571c-5.376 0-10.368 0.384-14.189715 0.768-17.664 2.304-27.245714 11.885714-27.245714 28.013715 0 20.717714 17.645714 30.317714 51.803429 30.317714z m539.044571-100.918857c12.653714 0 21.101714-4.205714 30.683429-18.029714l84.022857-119.698286h1.536l85.942857 121.618286c9.6 13.44 18.797714 16.109714 28.013714 16.109714 18.413714 0 30.701714-13.037714 30.701714-28.763429 0-7.296-2.304-14.189714-7.314285-20.717714l-98.194286-133.522286 98.194286-131.602285c5.010286-6.509714 7.314286-13.421714 7.314285-21.485715 0-16.493714-13.824-27.995429-29.165714-27.995428-13.805714 0-21.869714 6.912-29.165714 18.029714l-80.950857 118.546286h-1.92l-81.334857-118.930286c-7.296-11.136-16.493714-17.645714-31.085715-17.645714-17.645714 0-31.085714 14.189714-31.085714 29.531428 0 11.136 3.090286 18.048 8.466286 24.557715l93.220571 125.074285-98.980571 136.96c-5.76 7.314286-6.912 13.824-6.912 21.504 0 14.957714 12.672 26.459429 28.013714 26.459429z" p-id="8714"></path>


<path d="M258.56 135.2c-55.2 45.44-76 128-85.76 224H85.92v64h81.76c-1.6 26.24-2.72 53.12-4 80-6.24 136.48-12.64 277.6-73.6 331.2A121.12 121.12 0 0 1 0 858.08v64c6.88 0 13.6 0.8 20.16 0.8a164.48 164.48 0 0 0 112-39.52c81.44-71.68 88.48-226.56 96-376.48 1.28-27.84 2.56-55.84 4.32-83.2h100.32v-64h-95.68c8.64-78.24 24.96-144 62.08-174.88 21.12-17.28 58.88-22.88 96-17.28v-64c-55.2-7.52-101.28 2.72-136.64 31.68zM529.6 834.56c-100.48-161.28-80-465.92 7.68-576H460.8c-85.12 152.48-76.8 422.88-3.84 576zM966.72 834.72c72.8-153.12 81.28-423.52-4-576h-76.48c88.16 109.44 108.16 414.08 7.68 576zM858.4 421.6l-48.96-41.12-97.6 116.32-97.6-116.32-49.12 41.12 104.96 125.12-104.96 125.12 49.12 41.12 97.6-116.48 97.6 116.48 48.96-41.12-104.8-125.12 104.8-125.12z" p-id="4777"></path>


*/
