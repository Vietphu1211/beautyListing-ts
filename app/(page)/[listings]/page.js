'use client'

import '../../(page)/[listings]/listings.modules.css'
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
import listingCardItem from '@/app/_data/getListingData'
import { MapPin, SquarePlus, Star } from 'lucide-react'
import { Pagination } from '@/components/ui/pagination'
import { PaginationComponent } from '@/app/_components/pagination/Pagination'
import SearchBooking from '@/app/_components/search/SearchBooking'
import { useEffect, useRef, useState } from 'react'
import { updateCategoryInURL } from '@/app/_lib/utils'
import Category from '@/app/_components/category/Category'
import ListingFilterBar from '@/app/_components/ListingFilterBar'
import { OrderBy, ThemeSelect } from '@/app/_components/OrderBy'
import Modal from '@/app/_components/modals/Modal'
import { locationdata } from '@/app/_data/locationdata'
import CategoryList from '@/app/_components/category/CategoryList'

import { Button } from "@/components/ui/button"
import FilterDialog from '@/app/_components/dialog/FilterDialog'




const ListingPage = () => {
  const getListingData = listingCardItem
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
            <Button variant="outline" className="border-neutral-500 border mt-4">Lọc nâng cao</Button>
            </div>
          )}
          description={(<ListingFilterBar />)}
        />
            <OrderBy />
       </div>
        
        
        {/* filter & listings */}
        <div className='flex flex-row gap-2'>
          {/* filter */}
          {/* <ListingFilterBar /> */}
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
                        {/* lấy link theo theo id của listing */}
                        <Link href='/listing/alpha'
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