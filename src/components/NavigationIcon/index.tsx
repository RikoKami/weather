import { SVGProps } from 'react'

interface NavigationIconProps extends SVGProps<SVGSVGElement> {
  fillOne?: string
  fillTwo?: string
}

export const NavigationIcon = ({
  fillOne,
  fillTwo,
  style
}: NavigationIconProps) => {
  return (
    <svg
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="m507.618 4.471c-4.301-4.311-10.781-5.59-16.393-3.237l-482.026 202.009c-5.997 2.513-9.691 8.61-9.146 15.094s5.205 11.877 11.537 13.352l211.058 49.157c3.417.796 6.09 3.459 6.901 6.875l50.467 212.675c1.498 6.314 6.885 10.949 13.348 11.483.415.034.828.051 1.239.051 5.989 0 11.458-3.588 13.809-9.187l202.416-481.859c2.359-5.616 1.091-12.102-3.21-16.413z"
        fill={fillOne ?? '#59a7ff'}
      />
      <path
        d="m507.618 4.471c-.044-.044-.091-.083-.135-.126l-280.469 278.902c1.227 1.201 2.123 2.738 2.535 4.474l50.467 212.675c1.498 6.314 6.885 10.949 13.348 11.483.415.034.828.051 1.239.051 5.989 0 11.458-3.588 13.809-9.187l202.416-481.859c2.359-5.616 1.091-12.102-3.21-16.413z"
        fill={fillTwo ?? '#0082ff'}
      />
    </svg>
  )
}
