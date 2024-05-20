'use client'

import Image from "next/image"
import Link from "next/link"

import Container from "@/app/_components/Container"
import ListingFilterBar from "@/app/_components/ListingFilterBar"
import { OrderBy } from "@/app/_components/OrderBy"
import FilterDialog from "@/app/_components/dialog/FilterDialog"
import Footer from "@/app/_components/footer/Footer"
import Header from "@/app/_components/header/Header"
import ListingCard from "@/app/_components/listings/ListingCard"
import { PaginationComponent } from "@/app/_components/pagination/Pagination"
import SearchBooking from "@/app/_components/search/SearchBooking"
import { Button } from "@/components/ui/button"


import getListingData from "@/app/_data/getListingData"
import { locationdata } from "@/app/_data/locationdata"
import { listingCategoryItem } from "@/app/_data/listingCategoryItem"

import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"






const ListingPage = () => {
  // const getListingData = listingCardItem
  const listingData = getListingData
  const getLocationData = locationdata
  const getCategoryData = listingCategoryItem

  const [category, setCategory] = useState('all');
  const reflist = useRef();
  const params = useSearchParams();
 useEffect(()=> {
setCategory(params.get('category'))
 },[params])

 
 const [isopen, setIsopen] = useState(false)
  const modalHandleOpen = () => {
    setIsopen(!isopen)
  }

  const modalHandleClose = ()=> {
    setIsopen(false)
  }

  const body= (
    <div>
        <SearchBooking />
        <p>Từ khóa tìm kiếm phổ biến theo khu vực</p>
        <div className='flex flex-row gap-3'>
        {getLocationData && getLocationData.map((location)=> (
          <div
          className=''
           key={location.locationId}>
            <p>{location.locationTitle}</p>
            <Image
             src={location.img}
              alt={location.locationTitle}
              width={100}
              height={100}
             />
          </div>

        ))}
        </div>
    </div>
  )

 

  return (
    <>
     <section className="bg-neutral-800 pt-5">
      <Header />
      <div className='flex flex-col justify-center my-2'>
            <div
                ref={reflist}
                className=' flex flex-row justify-center items-center gap-2 overflow-x-auto
                 lg:overflow-hidden md:h-20'>
                {getCategoryData && getCategoryData.map((cate) => (

                    <Link href={cate.slug} key={cate.id} 
                        className='flex flex-col justify-center items-center gap-1 min-w-[110px] rounded-md py-1 px-0 md:py-1 md:px-1 hover:-translate-y-2 duration-500'
                    >
                        <p className='text-sm font-semibold line-clamp-1 text-neutral-100 shadown-sm'>{cate.title}</p>
                    </Link>
                ))
                }
            </div>
        </div>
     </section>
      <Container>
        {/* order by: */}
       <div className='flex flex-row justify-end items-center gap-4 -translate-y-[12px]'>
       <FilterDialog 
         labelDialogStyle="w-full border border-black"
          label= {(
            <div className='flex flex-row items-center gap-2 justify-between md:justify-end mb-4'>
            <span className="border-neutral-200 border mt-4 rounded-md px-2 py-2">Lọc nâng cao</span>
            </div>
          )}
          description={(<ListingFilterBar />)}
        />
            <OrderBy />
       </div>
        
        
        {/* filter & listings */}
        <div className='flex flex-row justify-center gap-2'>
          {/* filter */}
          {/* <ListingFilterBar /> */}
          {/* listings */}
          <div
            className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-2 lg:gap-3'
           
          >

          {
            listingData?.map(listing =>(

              <ListingCard 
              key={listing.listingId}
              title={listing.title}
              subtitle={listing.subtitle}
              slug={listing.slug}
              src={listing.src}
              alt={listing.alt}
              addressOfStore={listing.addressOfStore}
              reviewOfStore={listing.reviewOfStore}
              numberOfReviews={listing.numberOfReviews}
              badge={listing.badge || ''}
              
            />
            )
            )
          }
            
          </div>

          
        </div>
        {/* Pagination */}
        <div className=''>
              <PaginationComponent />
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default ListingPage