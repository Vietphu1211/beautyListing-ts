'use client'

import Link from 'next/link'
import Image from 'next/image'

import Container from '@/app/_components/Container'
import Footer from '@/app/_components/footer/Footer'
import Header from '@/app/_components/header/Header'
import { listingCategoryItem } from '@/app/_data/listingCategoryItem'
import {  useRouter,useSearchParams } from 'next/navigation'

import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from "@/components/ui/slider"
import Listings from '@/app/_components/listings/Listings'
import ListingCard from '@/app/_components/listings/ListingCard'
import listingCardItem from '@/app/_data/listingData'
import { MapPin, SquarePlus, Star } from 'lucide-react'
import { Pagination } from '@/components/ui/pagination'
import { PaginationComponent } from '@/app/_components/Pagination'
import SearchBooking from '@/app/_components/search/SearchBooking'
import { useEffect, useState } from 'react'
import { updateCategoryInURL } from '@/app/_lib/utils'
import Category from '@/app/_components/category/Category'
import ListingFilterBar from '@/app/_components/ListingFilterBar'
import { OrderBy, ThemeSelect } from '@/app/_components/OrderBy'


const ListingPage = () => {
  const getListingData = listingCardItem

  const [category, setCategory] = useState('all');
  const params = useSearchParams();
 useEffect(()=> {
setCategory(params.get('category'))
 },[params])

 

 

  return (
    <>
      <Header />
      <Container>
        {/* search */}
        <div className='sticky md:relative top-0 z-20 bg-white px-4 py-2 shadow-md md:shadow-none'>
          <SearchBooking 
            className="flex"
          />
        </div>
        {/* category */}
        <Category />
        {/* order by: */}
        <OrderBy />
        
        {/* filter & listings */}
        <div className='flex flex-row gap-2'>
          {/* filter */}
          <ListingFilterBar />
          {/* listings */}
          <div className='flex-auto overflow-hidden'>
            <div className='flex flex-col justify-center gap-1 items-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
              {
                getListingData && getListingData.map((listing => (
                  
                  <div className='w-11/12 mx-auto md:12/12 ' key={listing.listingId}>
                  
                    {/* khung container của cardlist */}
                    <div className='relative border-2 max-w-sm min-w-[250px] md:min-w[270px] shadow-lg p-1 flex flex-col justify-between items-start h-[350px]'>
                      {/* header cardlist */}
                      <div className='flex-none h-[200px] w-full group transition-all duration-300 overflow-auto'>
                        <div className='absolute w-full z-20'>
                          <SquarePlus strokeWidth={0.75}
                            className='listing__favourite font-light -translate-y-16 translate-x-16 group-hover:translate-x-16 group-hover:translate-y-16 group-hover:opacity-100 opacity-100 w-full text-white  transition-all duration-300 '
                            width={40}
                            height={40}
                          />
                        </div>
                        <Link href='/'
                          className='cursor-pointer h-full'>
                          <Image
                            alt={listing.alt}
                            src={listing.src}
                            height={150}
                            width={150}
                            className='object-cover rounded-t-md w-full h-full shadow-md group-hover:filter group-hover:brightness-50 duration-300 transition-all z-10'
                          />
                        </Link>
                      </div>
                      {/*  body listingcard */}
                      <div className=' w-full h-[100px]'>
                        <Link href="/">
                          <h3 className='font-medium text-lg text-black line-clamp-1 hover:text-primary cursor-pointer'>
                            {listing.title}
                          </h3>
                          <p className='font-light text-sm md:text-md text-neutral-700 line-clamp-2'>
                            {listing.subtitle}
                          </p>
                        </Link>
                        <div className='flex flex-row justify-start items-center gap-1 text-neutral-500 font-light text-xs md:text-ms'>
                          <MapPin />
                          <p className='line-clamp-1'>{listing.addressOfStore}</p>
                        </div>

                      </div>
                      {/* div footerCard */}
                      <div className='flex flex-row h-[50px] justify-around gap-3 items-center'>
                        <span className='flex flex-row items-center gap-0.5 font-medium border-r-[1px] pr-2'>
                          {listing.reviewOfStore}
                          <Star className='text-yellow-400 inline-block' /></span>
                        <p className='text-sm font-light border border-solid border-orange-300 rounded-md py-0 px-1'><span className='text-orange-700 font-bold'>252 </span>
                          reviews
                        </p>
                        <Link href='/' className='font-semibold border-l-[1px] pl-2' ><p>Detail</p></Link>

                      </div>
                    </div>
                  </div>
                )))
              }
            </div>
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