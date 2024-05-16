import React from 'react'

const Container = ({
    children
}) => {
  return (
    <div
    className=' container relative w-12/12 md:w-10/12 lg:9/12 xl:8/12 h-auto p-0'
    >{children}</div>
  )
}

export default Container