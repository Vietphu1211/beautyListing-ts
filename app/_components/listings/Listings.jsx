'use client'
import React, { useRef } from 'react'
import ListingCard from './ListingCard'
import Container from '../Container'
import Heading from '../Heading'
import SlidingHandleButton from '../SlidingHandleButton'

const Listings = () => {
  const listRef = useRef(null)
  const scrollRightHandle = () => {
    console.log('hello')
    if(listRef.current) {
      listRef.current.scrollBy({
          left:300,
          behavior:"smooth"
      })
  }
  };
  const scrollLeftHandle = () => {
    console.log('hello')
    if (listRef.current) {
      listRef.current.scrollBy({
        left: -300,
        behavior: "smooth"
      })
    }
  }
  return (
    <section>
      <Container>
        <Heading
          title="Explore the best salon near you"
          subtitle="Connect with the highest rating salon where you live"
        />
        <div >
          <div
            className='flex flex-row justify-start items-center gap-2 overflow-x-auto md:overflow-hidden py-5 '
            ref={listRef}
          >
            <ListingCard />
          </div>
          <SlidingHandleButton 
            scrollLeftHandle={()=> scrollLeftHandle()}
            scrollRightHandle={()=> scrollRightHandle()}
          />
        </div>
      </Container>
    </section>
  )
}

export default Listings