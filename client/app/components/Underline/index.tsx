import * as React from "react"
import { SVGProps } from "react"
import style from "./style.module.scss"

const Underline = (props: SVGProps<SVGSVGElement>) => (
  <svg 
  className={style.svg}
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="0 0 200 5"
    {...props}
  >
    <path
      d="M198.24 2.48c0-1.37-44.38-2.48-99.12-2.48S0 1.11 0 2.48c0 1.37 44.38 2.48 99.12 2.48s99.12-1.11 99.12-2.48z"
      className={"red_fill"}
    />
  </svg>
)
export default Underline