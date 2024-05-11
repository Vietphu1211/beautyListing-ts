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
import styles from '../../[listings]/detail-listing.modules.css'


const DetailListingPage = () => {
  return (
    <>
      <section className='my-3 bg-primary  w-full mx-auto z-20'>
        <Header />
        <div className=' flex flex-row justify-start items-center gap-4 my-4 p-2 w-8/12 mx-auto'>
          <div className='w-8/12'>
            <SearchForm
              placeholder="Tìm cửa hàng"
            />
          </div>
          <div className="relative flex flex-none w-3/12 flex-shrink-0">
            <label htmlFor='search' className='sr-only'>Địa điểm</label>
            <input className='peer w-full block rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500' placeholder="Địa điểm" />
            <MapPin className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>

          <div className="relative flex flex-none w-3/12 flex-shrink-0">
            <label htmlFor='search' className='sr-only'>Thời gian</label>
            <input className='peer w-full block rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500' placeholder="Địa điểm" />
            <MapPin className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </section>
      <CategoryList />
        <BreadcrumbCollapsed />
      <Container>
        <div className='flex flex-row gap-7 relative'>
          <Mainsection />
          <Sidebar />
        </div>
      </Container>
      {/* <Footer /> */}
    </>
  )
}

export default DetailListingPage