import { SVGProps } from 'react'

export const LocationIcon = ({ fill }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="38px"
      height="38px"
      viewBox="0 0 38 38"
      xmlSpace="preserve"
      fill={fill}
    >
      <path
        d="M19,0C11.096,0,4.666,6.43,4.666,14.333c0,11.379,12.796,22.81,13.341,23.292C18.292,37.875,18.646,38,19,38
          c0.368,0,0.736-0.135,1.023-0.404c0.543-0.508,13.311-12.568,13.311-23.262C33.334,6.431,26.902,0,19,0z M19,21.168
          c-3.775,0-6.834-3.061-6.834-6.833S15.225,7.502,19,7.502c3.773,0,6.832,3.06,6.832,6.833S22.773,21.168,19,21.168z"
      />
    </svg>
  )
}
