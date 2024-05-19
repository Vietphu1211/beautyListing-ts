
import Container from '@/app/_components/Container'
import ServiceCarousel from '@/app/_components/carousel/ServiceCarousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Share, Undo2, Heart } from 'lucide-react';
import Image from 'next/image';
import StarReview from './StarReview';
import CustomCarousel from '@/app/_components/carousel/FeatureCarousel';
import { PaginationComponent } from '@/app/_components/pagination/Pagination';
import SearchForm from '@/app/_components/search/SearchForm';
import { Button } from "@/components/ui/button"
import Sidebar from './Sidebar';
import { AccordionHeader } from '@radix-ui/react-accordion';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

import BackToTopButton from '@/app/_components/button/BackToTopButton ';
import NavigationTabs from './[slug]/NavigationTabs';
import Link from 'next/link';





const Mainsection = () => {

  // chức năng theo dõi scroll ở window để xử lý Dom ========
  const [scrollPositionY, setScrollPositionY] = useState({ top: 0 })
  useEffect(() => {
    const handleScroll = () => {
      // write something
      const newScrollPosition = { top: window.scrollY || document.documentElement.scrollTop }
      setScrollPositionY(newScrollPosition)
      console.log('hello', newScrollPosition)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // =======================

  const content = (
    <ServiceCarousel />
  )
  return (
    <div className='flex flex-row justify-center gap-7 relative ' >
      <div className='relative w-full flex-none rounded-md'>

        <div className={`md:hidden
   w-full top-0 z-50 flex flex-row gap-10
 ${scrollPositionY.top <= 50 ?  "absolute bg-transparent/0": "sticky bg-neutral-800" }
 `}>
          {/* lưu ý scrollPosition đang ở dạng object, phải lấy value của props top để so sánh điều kiện */}
          <Link href={'/listing'}>
        {/* back to listinghub  */}
            <Undo2
              className={`translate-x-5  my-2
            ${scrollPositionY.top <= 50 ? "text-primary/70": "text-neutral-200" }
            `}
              strokeWidth={2} size={30} />
          </Link>

          {/* navigative tabs */}
          <div className={`overflow-hidden  w-12/12
            ${scrollPositionY.top <= 50 ?"hidden": "flex"  }
            `}>
            <NavigationTabs />
          </div>
        </div>
        {/* feature image */}
        <div className='w-12/12 relative md:hidden'>
          <CustomCarousel
            key={1}
            src="https://plus.unsplash.com/premium_photo-1670348051093-a3f94b408bcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmFpbHxlbnwwfDB8MHx8fDA%3D"
            alt="image"

          />
        </div>
        {/* image feature */}
        <div className=' hidden w-full md:grid grid-cols-3 gap-2  rounded-lg px-1 py-1'>

          <Image
            src="https://plus.unsplash.com/premium_photo-1670348051093-a3f94b408bcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmFpbHxlbnwwfDB8MHx8fDA%3D"
            alt="image"
            width={500}
            height={350}
            className="w-full col-span-2 row-span-2 rounded-l-lg"
          />
          {/* additional image - render 1 mảng chứa 2 hình ảnh cập nhật mới nhất */}
          <Image
            src="https://plus.unsplash.com/premium_photo-1670348051093-a3f94b408bcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmFpbHxlbnwwfDB8MHx8fDA%3D"
            alt="image"
            width={500}
            height={350}
            className="w-full rounded-r-lg"
          />
          <Image
            src="https://plus.unsplash.com/premium_photo-1670348051093-a3f94b408bcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmFpbHxlbnwwfDB8MHx8fDA%3D"
            alt="image"
            width={500}
            height={350}
            className="w-full rounded-r-lg"
          />

        </div>

        <Container></Container>
        <div className='flex flex-row justify-between md:grid md:grid-cols-3 mt-5'>
          <div className=' md:col-span-2 flex flex-col justify-between items-center 
    md:mt-5'>
            <div>
              <div className='flex flex-row justify-between items-start w-12/12
         md:items-center md:w-10/12'>
                {/* Title of listing */}
                <h2 className='text-2xl font-medium'>Sunnay Nail Room</h2>
                <div className='flex flex-row justify-between items-center gap-4'>
                  <Share className='cursor-pointer hover:shadow-md' color="#009FAA" strokeWidth="2px" size={30} />
                  <Heart className='cursor-pointer hover:shadow-md' color="#009FAA" strokeWidth="2px" size={30} />
                </div>
              </div>

              <div>
                <p className='text-sm font-light text-neutral-500'>960 Lincoln Hwy, Schererville, 46375</p>
              </div>

              <div id='anchor-vi-tri'>
                {/* vị trí cửa hàng */}
                <Accordion type='single' collapsible >
                  <AccordionItem value='item-1'>
                    <AccordionTrigger className='text-base font-medium md:mt-2'>Vị trí trên bản đồ
                    </AccordionTrigger>
                    <AccordionContent>

                      <div className='flex flex-col gap-2'>
                        <p>25 Phước Mỹ 1, Sơn Trà, Đà Nẵng, Việt Nam</p>
                        <div className='flex flex-row justify-center md:justify-start '>
                          <iframe
                            className='rounded-md shadow-md'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9913954635094!2d108.2423278!3d16.0659363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314217816cff4869%3A0x82b09ae451422ae8!2zMjUgUGjGsOG7m2MgTeG7uSAxLCBQaMaw4bubYyBN4bu5LCBTxqFuIFRyw6AsIMSQw6AgTuG6tW5nIDU1MDAwMA!5e0!3m2!1svi!2s!4v1715306728204!5m2!1svi!2s" width="400" height="250"
                            referrerpolicy="no-referrer-when-downgrade">
                          </iframe>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className='mt-3'>

                <h3>Mô tả</h3>
                <p>Booksy guarantees that reviews with the "Verified Booksy user" tag have been added by registered Booksy users who have had an appointment with the provider. A registered Booksy user has the opportunity to add a review only after the service has been provided to them.</p>
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <div className='hidden md:block w-full row-span-1 col-span-1'>
            <Sidebar />
          </div>
        </div>
        <Container></Container>
        {/* Dịch vụ phổ biến*/}
        <div id='anchor-dich-vu'>
          <div>
            <div>
              {/* <h3 className='text-xl font-medium'>Dịch vụ</h3> */}
              <div className='my-4'>
                {/* <h4>Các dịch vụ chính </h4> */}
                <Accordion type="single" collapsible defaultValue='item-1'>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <h4>Dịch vụ phổ biến</h4>
                    </AccordionTrigger>
                    <AccordionContent>
                    
                      {/* Danh sách các dịch vụ tại cửa hàng nằm ở ServiceCarousel */}

                      <ServiceCarousel />

                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Container></Container>
                {/* giờ mở cửa */}
                <div id='anchor-gio-mo-cua'></div>
                <Accordion type='single' collapsible defaultValue='item-2'>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      <h4>Giờ mở cửa & ngày nghỉ</h4>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className='flex flex-row justify-start gap-10 my-4'>
                        <div>
                          <h4 className='text-base font-light border-b-[1px]'>Giờ mở cửa</h4>
                          <div className='flex flex-col gap-2 text-sm mt-2'>
                            {/* render chuỗi tiêu đề dịch vụ khác */}
                            <p>Thứ 2: Cả ngày</p>
                            <p>Thứ 3: 9 giờ Sáng - 21 giờ tối</p>
                            <p>Thứ 4: 9 giờ Sáng - 21 giờ tối</p>
                            <p>Thứ 5: 9 giờ Sáng - 21 giờ tối</p>
                            <p>Thứ 6: 9 giờ Sáng - 21 giờ tối</p>
                            <p>Thứ 7: 9 giờ Sáng - 21 giờ tối</p>
                            <p>Chủ nhật: 9 giờ Sáng - 21 giờ tối</p>

                          </div>
                        </div>
                        <div>
                          <h4 className='text-base font-light border-b-[1px]'>Ngày nghỉ lễ</h4>
                          <div className='flex flex-col gap-2 text-sm mt-2'>
                            <p>Lễ quốc khánh</p>
                            <p>Ngày quốc tế lao động</p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Container></Container>


                {/* review */}
                <Container></Container>
                <div id='anchor-danh-gia' ></div>
                <Accordion type='single' collapsible defaultValue='item-2'>
                  <AccordionItem value='item-2'>

                    <AccordionTrigger> Đánh giá
                    </AccordionTrigger>
                    <AccordionContent
                    >
                      <div className='flex flex-col md:flex-row md:justify-between md:items-start'>
                        {/* header of reviews */}
                        <div className='w-full md:w-7/12'>
                          <h3>Đánh giá từ khách hàng</h3>
                          <p className='text-neutral-500 line-clamp-5'>have been added by registered Booksy users who have had an appointment with the provider. A registered Booksy user has the opportunity to add a review only after the service has been provided to them. A registered Booksy user has the opportunity to add a review only after the service has been provided to them. A registered Booksy user has the opportunity to add a review only after the service has been provided to them.</p>
                        </div>
                        {/* total of reviews */}
                        <div>
                          <div className='flex flex-row md:flex-col justify-center items-center gap-1 border-[1px]  rounded-md py-4 px-2'>
                            <div className='flex flex-col items-center'>
                              <p className='text-xl font-semibold'>5.0/5</p>
                              <StarReview />
                            </div>
                            <Badge variant="outline" className='font-semibold text-sm text-neutral-500  '> 117 đánh giá</Badge>
                          </div>


                        </div>

                      </div>
                      {/* detail of reviews */}
                      <div>
                        <div>
                          <div className='my-4'>
                            <div>
                              <p>Dịch vụ Cắt tóc nam</p>

                              <StarReview />

                              {/*render service */}
                              {/* render user and date of booking */}
                              <div className='flex flex-row items-center gap-1'>
                                <Avatar>
                                  <AvatarImage src="https://github.com/shadcn.png" />
                                  <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <p>Phu Viet</p>
                              </div>
                              <p>14-05-2024</p>
                            </div>
                            <div>
                              <p className='text-neutral-500 text-sm font-medium line-clamp-2'>Dịch vụ tốt, phục vụ tận tình, làm nail sạch, sẽ quay lại</p>
                            </div>
                          </div>

                          <div className='my-4'>
                            <div>
                              <p>Dịch vụ Cắt tóc nam</p>

                              <StarReview />

                              {/*render service */}
                              {/* render user and date of booking */}
                              <div className='flex flex-row items-center gap-1'>
                                <Avatar>
                                  <AvatarImage src="https://github.com/shadcn.png" />
                                  <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <p>Phu Viet</p>
                              </div>
                              <p>14-05-2024</p>
                            </div>
                            <div>
                              <p className='text-neutral-500 text-sm font-medium line-clamp-2'>Dịch vụ tốt, phục vụ tận tình, làm nail sạch, sẽ quay lại</p>
                            </div>
                          </div>
                          <div className='my-4'>
                            <div>
                              <p>Dịch vụ Cắt tóc nam</p>

                              <StarReview />
                              {/*render service */}
                              {/* render user and date of booking */}
                              <div className='flex flex-row items-center gap-1'>
                                <Avatar>
                                  <AvatarImage src="https://github.com/shadcn.png" />
                                  <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <p>Phu Viet</p>
                              </div>
                              <p>14-05-2024</p>
                            </div>
                            <div>
                              <p className='text-neutral-500 text-sm font-medium line-clamp-2'>Dịch vụ tốt, phục vụ tận tình, làm nail sạch, sẽ quay lại</p>
                            </div>
                          </div>
                        </div>

                        {/* pagination */}

                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

              </div>
              {/* detail review of user */}



            </div>
          </div>
        </div>

      </div>
    </div>









  )
}

export default Mainsection