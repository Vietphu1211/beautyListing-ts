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


const ListingPage = ({slug}) => {
  const getListingCategoryItem = listingCategoryItem;
  const getListingData = listingCardItem


  const router = useRouter();
  // const goToListing = () => { 
    
  //   getListingCategoryItem.map((item) => {
  //     slug = item.slug
  //     console.log(slug)
  //   })
  //   const params = new URLSearchParams(router.query);
  //   params.set('category', slug) ;
  //   const newUrl = `${window.location.pathname}?${params.toString()}`;
  //   window.history.pushState({path:newUrl}, '', newUrl)
  // }

const [searchParams, setSearchParams]= useSearchParams();
const goToListing = (slug) => {
  setSearchParams({category:slug});

  router.push({
    pathname:router.pathname,
    search:`?category=${slug}`
  })
}

  
  return (
    <>
      <Header />
      <Container>
        {/* category */}
        <div className='flex flex-row gap-3 items-center justify-center my-5'>
          {getListingCategoryItem && getListingCategoryItem.map((cate) => (
            <div key={cate.id}
              // href={`/listings/${cate.slug}`}
              onClick={()=>goToListing(cate.slug)}
              className=' cursor-pointer hover:text-primary hover:underline'
            >
              <p>{cate.title}</p>
            </div>
          ))}
        </div>
        {/* search */}
        <div>
          <SearchBooking />
        </div>
        {/* filter & listings */}
        <div className='flex flex-row gap-2'>
          {/* filter */}
          <div className='hidden md:block flex-none border-[1px] border-neutral-300 w-3/12 h-auto px-4 py-2 rounded-md'>
            <div className='flex flex-col'>
              <div className='border-b-[1px] border-neutral-300'>
                <p className='text-lg font-semibold'>Tìm kiếm theo:</p>
              </div>
              <div className='border-b-[1px] border-neutral-300 py-3 px-1'>
                <p className='text-sm font-semibold my-2'>Ngân sách của bạn</p>
                <div className='flex flex-col justify-start gap-3'>
                  <div className='text-sm font-normal'>
                    <p><span>vnd</span> 200.000</p>
                    <p><span>vnd</span> 500.000</p>

                  </div>
                  <div className='px-2'>
                    <Slider defaultValue={[10]} max={100} step={1} />
                  </div>
                </div>

              </div>
              <div className='border-b-[1px] border-neutral-300 py-3 px-1'>
                <p className='text-sm font-semibold my-2 '>Khu vực tìm kiếm</p>
                <div className='flex flex-col justify-start gap-3'>
                  <div className='flex flex-row justify-start items-center gap-2 px-1'>
                    <Checkbox />
                    <p className='text-sm font-normal'>Sơn Trà</p>
                    <p>(1)</p>
                  </div>
                  <div className='flex flex-row justify-start items-center gap-2 px-1'>
                    <Checkbox />
                    <p className='text-sm font-normal'>Hải Châu</p>
                    <p>(1)</p>
                  </div>
                  <div className='flex flex-row justify-start items-center gap-2 px-1'>
                    <Checkbox />
                    <p className='text-sm font-normal'>Ngũ Hành Sơn</p>
                    <p>(1)</p>
                  </div>
                  <div className='flex flex-row justify-start items-center gap-2 px-1'>
                    <Checkbox />
                    <p className='text-sm font-normal'>Liên Chiểu</p>
                    <p>(1)</p>
                  </div>
                  <div className='flex flex-row justify-start items-center gap-2 px-1'>
                    <Checkbox />
                    <p className='text-sm font-normal'>Thanh Khê</p>
                    <p>(1)</p>
                  </div>
                </div>
              </div>

              <div className='border-b-[1px] border-neutral-300 py-3'>
                <p className='text-sm font-semibold my-2 px-1'>Điểm đánh giá của salon</p>
                <div className='flex flex-col justify-start gap-3'>
                  <div className='flex flex-row justify-start items-center gap-2 px-1'>
                    <Checkbox />
                    <p className='text-sm font-normal'>Rất tốt:8 điểm trở lên</p>
                    <p>(12)</p>
                  </div>
                  <div className='flex flex-row justify-start items-center gap-2 px-1'>
                    <Checkbox />
                    <p className='text-sm font-normal'>Tốt: 7 điểm trở lên</p>
                    <p>(10)</p>
                  </div>
                  <div className='flex flex-row justify-start items-center gap-2 px-1'>
                    <Checkbox />
                    <p className='text-sm font-normal'>Dễ chịu: 6 điểm trở lên</p>
                    (0)
                  </div>
                </div>
              </div>



            </div>
          </div>
          {/* listings */}
          <div className='flex-auto overflow-hidden'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {
                getListingData && getListingData.map((listing => (
                  <div className='' key={listing.listingId}>
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