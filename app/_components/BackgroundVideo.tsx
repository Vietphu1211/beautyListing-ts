import React from 'react'

const BackgroundVideo = () => {
  return (
    <video autoPlay muted loop playsInline className='filter brightness-75 object-cover w-full h-full inset-0'>
    <source 
        src='/background-video.mp4'
        type='video/mp4'
    />
    </video>
  )
}

export default BackgroundVideo