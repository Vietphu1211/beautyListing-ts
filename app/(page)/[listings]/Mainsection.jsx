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
import { Heart } from 'lucide-react';

import { Share } from 'lucide-react';
import Image from 'next/image';
import StarReview from './StarReview';
import CustomCarousel from '@/app/_components/carousel/FeatureCarousel';
import { PaginationComponent } from '@/app/_components/pagination/Pagination';
import SearchForm from '@/app/_components/search/SearchForm';
import { Button } from "@/components/ui/button"


const Mainsection = () => {
  const content = (
    <ServiceCarousel />
  )
  return (
    <div className=' w-8/12 flex-auto'>

      {/* feature image */}
      <div className='w-full'>
        <CustomCarousel
          key={1}
          src="https://plus.unsplash.com/premium_photo-1670348051093-a3f94b408bcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmFpbHxlbnwwfDB8MHx8fDA%3D"
          alt="image"
          className="w-full rounded-lg"
        />
      </div>
      {/* Title of listing */}
      <Container></Container>
      <div>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-2xl font-medium'>Sunnay Nail Room</h2>
          <div className='flex flex-row justify-between items-center gap-2'>
            <Share />
            <Heart />
          </div>
        </div>
        <div>
          <p className='text-sm font-light text-neutral-500'>960 Lincoln Hwy, Schererville, 46375</p>
        </div>
      </div>
      <Container></Container>
      {/* Service Menu */}
      <div>
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
                    <div className='flex flex-row justify-end w-6/12 mb-4'>
                      <SearchForm
                        placeholder='Nhập từ khóa để tìm các dịch vụ'
                        onChange={() => { }}
                        defaultValue={""}
                      />
                    </div>
                    {/* render feature service */}
                    <ServiceCarousel />
                    <Button variant='outline' className="border border-neutral-500 mt-4">Danh mục dịch vụ</Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Container></Container>
              {/* các dịch vụ khác */}
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

              {/* vị trí cửa hàng */}
              <Accordion type='single' collapsible>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='text-base font-medium my-2'>Vị trí cửa hàng
                  </AccordionTrigger>
                  <AccordionContent>
                    <>
                    <div>
                      <p>25 Phước Mỹ 1, Sơn Trà, Đà Nẵng, Việt Nam</p>
                    </div>
                    <div className='flex flex-row justify-start rounded-md'>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9913954635094!2d108.2423278!3d16.0659363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314217816cff4869%3A0x82b09ae451422ae8!2zMjUgUGjGsOG7m2MgTeG7uSAxLCBQaMaw4bubYyBN4bu5LCBTxqFuIFRyw6AsIMSQw6AgTuG6tW5nIDU1MDAwMA!5e0!3m2!1svi!2s!4v1715306728204!5m2!1svi!2s" width="400" height="250"
                        referrerpolicy="no-referrer-when-downgrade">
                      </iframe>
                    </div>
                    </>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* gallery of business */}
              <div>
                <h3 className='text-base font-medium my-2'>Hình ảnh cửa hàng</h3>
                <Carousel>
                  <CarouselContent>
                    <CarouselItem className="flex flex-row justify-center p-4">
                      {/* feature image */}
                      <Image
                        src="https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt='src'
                        width={500}
                        height={500}
                        className='object-cover w-5/12 rounded-md'

                      />
                    </CarouselItem>
                    <CarouselItem className="flex flex-row justify-center p-4">
                      <Image
                        src="https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt='src'
                        width={500}
                        height={500}
                        className='object-cover w-5/12 rounded-md'

                      /></CarouselItem>
                    <CarouselItem className="flex flex-row justify-center p-4">
                      <Image
                        src="https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt='src'
                        width={500}
                        height={500}
                        className='object-cover w-5/12 rounded-md'

                      /></CarouselItem>
                  </CarouselContent>
                  {/* <CarouselPrevious /> */}
                  {/* <CarouselNext /> */}
                </Carousel>
              </div>

              {/* review */}
              <Container></Container>
              <div className='flex flex-row justify-between items-start'>
                <div className='w-7/12'>
                  <h3>Đánh giá từ khách hàng</h3>
                  <p className='text-neutral-500 line-clamp-5'>have been added by registered Booksy users who have had an appointment with the provider. A registered Booksy user has the opportunity to add a review only after the service has been provided to them. A registered Booksy user has the opportunity to add a review only after the service has been provided to them. A registered Booksy user has the opportunity to add a review only after the service has been provided to them.</p>
                </div>
                {/* total of reviews */}
                <div>
                  <div className='flex flex-col justify-center items-center gap-1 border-[1px] border-black rounded-md py-4 px-2'>
                    <p>5.0/5</p>
                    <StarReview />

                    <p className='text-sm text-neutral-500 font-light '>Dựa trên 117 đánh giá</p>
                  </div>
                </div>
              </div>
            </div>
            {/* detail review of user */}
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Xem những gì khách hàng đánh giá về sunny Nail room</AccordionTrigger>
                  <AccordionContent>
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
                    <PaginationComponent />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* pagination */}

            </div>


          </div>
        </div>
      </div>
      {/* breadcrum */}

    </div>


  )
}

export default Mainsection