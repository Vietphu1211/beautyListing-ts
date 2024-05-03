import React from 'react'

const Container = ({
    children
}) => {
  return (
    <div
    className=' container relative mx-auto w-full h-auto py-5 px-0'
    >{children}</div>
  )
}

export default Container