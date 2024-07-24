"use client"

import * as React from "react"
import { SVGProps } from "react"
import style from "./style.module.scss"



export const RightSidePieces = (props: SVGProps<SVGSVGElement>) => {
    return (
        <>
            <svg className={style.svg}
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"

                style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                }}
                viewBox="0 0 172.4 172.42"
                {...props}
            >
                <path className={`aqua_fill`} d="M123.23 102.47c-0.9,0.01 -1.78,-0.06 -2.65,-0.22 -5.53,-1.01 -10.63,3.17 -10.55,8.79l0.26 17.76c0.07,4.88 -3.82,8.89 -8.7,8.96 -30.43,0.45 -60.85,0.9 -91.28,1.35 -4.88,0.07 -8.89,-3.83 -8.96,-8.7l-1.35 -91.28c-0.07,-4.88 3.83,-8.89 8.7,-8.96l17.76 -0.26c5.62,-0.08 9.65,-5.31 8.48,-10.81 -0.18,-0.86 -0.29,-1.74 -0.3,-2.64 -0.13,-8.93 8.49,-16.3 19.26,-16.46 10.77,-0.16 19.61,6.95 19.74,15.89 0.01,0.9 -0.06,1.78 -0.22,2.64 -1.01,5.53 3.17,10.63 8.79,10.55l17.76 -0.26c4.88,-0.07 8.89,3.82 8.97,8.7l0.26 17.76c0.08,5.62 5.31,9.65 10.8,8.48 0.86,-0.18 1.74,-0.28 2.64,-0.3 8.93,-0.13 16.3,8.49 16.46,19.27 0.16,10.77 -6.95,19.61 -15.89,19.74z" />
                <path className={`orange_fill `} d="M6.11 19.59l12.05 0.04c3.75,0.01 6.51,-3.43 5.78,-7.11 -0.11,-0.58 -0.17,-1.17 -0.17,-1.77 0.02,-5.96 5.86,-10.77 13.04,-10.75 7.18,0.02 12.99,4.87 12.97,10.83 -0,0.6 -0.06,1.2 -0.18,1.77 -0.75,3.68 1.99,7.13 5.74,7.14l11.65 0.04c3.25,0.01 5.88,2.66 5.87,5.91l-0.04 11.94c-0.01,3.79 -3.55,6.6 -7.23,5.72 -0.67,-0.16 -1.36,-0.25 -2.07,-0.25 -5.96,-0.02 -10.81,5.79 -10.83,12.97 -0.02,7.18 4.79,13.02 10.75,13.04 0.71,0 1.4,-0.08 2.07,-0.23 3.69,-0.86 7.21,1.98 7.19,5.76l-0.04 11.94c-0.01,3.25 -2.66,5.88 -5.91,5.87l-60.89 -0.2c-3.25,-0.01 -5.88,-2.66 -5.87,-5.91l0.2 -60.89c0.01,-3.25 2.66,-5.88 5.91,-5.87z" />
                <path className={`yellow_fill `} d="M0.04 18.04c0.01,3.79 3.55,6.6 7.23,5.72 0.67,-0.16 1.36,-0.25 2.07,-0.25 5.96,-0.02 10.81,5.79 10.83,12.97 0.02,7.18 -4.79,13.02 -10.75,13.04 -0.71,0 -1.4,-0.08 -2.07,-0.23 -3.69,-0.86 -7.2,1.97 -7.19,5.76l0.04 11.94c0.01,3.25 2.66,5.88 5.91,5.87l11.85 -0.04c3.75,-0.01 6.48,-3.47 5.74,-7.14 -0.12,-0.57 -0.18,-1.17 -0.18,-1.77 -0.02,-5.96 5.79,-10.81 12.97,-10.83 7.18,-0.02 13.02,4.79 13.04,10.75 0,0.6 -0.06,1.19 -0.17,1.77 -0.72,3.68 2.03,7.12 5.78,7.11l11.85 -0.04c3.25,-0.01 5.88,-2.66 5.87,-5.91l-0.05 -16.92c-1.34,-1.63 -3.54,-2.51 -5.82,-2.04 -0.57,0.12 -1.16,0.18 -1.76,0.18 -5.96,0.03 -10.82,-5.77 -10.85,-12.96 -0.04,-7.18 4.76,-13.03 10.72,-13.06 0.6,-0 1.19,0.05 1.76,0.16 2.32,0.45 4.54,-0.48 5.86,-2.17l-0.05 -14.09c-0.01,-3.25 -2.66,-5.88 -5.91,-5.87l-60.89 0.2c-3.25,0.01 -5.88,2.66 -5.87,5.91l0.04 11.94z" />
            </svg>
        </>
    )
}