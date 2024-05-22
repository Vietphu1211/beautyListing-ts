import React from 'react'


interface ContainerProps {
  children: React.ReactNode
  className?:string
}
const Container:React.FC<ContainerProps> = ({
    children,
    className
}) => {
  return (
    <div
    className={`' container relative w-12/12 md:w-10/12 lg:9/12 xl:8/12 h-auto p-0'
    ${className}
    `}
    >{children}</div>
  )
}

export default Container