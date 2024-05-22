import Loading from '@/app/Loading'
import React from 'react'
import LazyLoad from 'react-lazyload'

const LazyLoadedComponent = () => {
  return (
    <LazyLoad height={200} offset={100} placeholder={<Loading />} >LazyLoadedComponent</LazyLoad>
  )
}

export default LazyLoadedComponent