'use client'

import Container from '@/app/_components/Container'
import CategoryList from '@/app/_components/category/CategoryList'
import Footer from '@/app/_components/footer/Footer'
import Header from '@/app/_components/header/Header'
import SearchBooking from '@/app/_components/search/SearchBooking'
import SearchForm from '@/app/_components/search/SearchForm'
import { Input } from '@/components/ui/input'

import { MapPin } from 'lucide-react';
import Mainsection from '../Mainsection'
import Sidebar from '../Sidebar'
import { BreadcrumbCollapsed } from '@/app/_components/BreadcrumbCollapsed'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { listingCategoryItem } from '@/app/_data/listingCategoryItem'
import CTAbtn from '@/app/_components/button/MobileCtabtn'
import Ctabtn from '@/app/_components/button/MobileCtabtn'
import DetailBusinessTab from '@/app/_components/tabs/DetailBusinessTab'
import BackToTopButton from '@/app/_components/button/BackToTopButton '



const DetailListingPage = () => {
  const reflist = useRef();


 
  return (
    <>
      <main id='topPage' className="relative px-3">
        <div  className='hidden md:block bg-neutral-800 py-5'>
          <Header />
        </div>
        {/* <div  className={`${scrollPositionY.top <= 50 ? 'absolute':'bg-neutral-800 sticky md:absolute py-3'} top-0 my-3 absolute   w-full mx-auto z-50`}>
        </div> */}
        <Container>   
            <Mainsection />
            <BreadcrumbCollapsed />
        </Container>
      </main>
      <Footer />
        <Ctabtn />
      <BackToTopButton />

    </>
  )
}

export default DetailListingPage