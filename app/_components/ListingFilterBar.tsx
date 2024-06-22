import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { useEffect, useState } from 'react'
import useScrollEffect from '../hooks/useScrollEffect';



const ListingFilterBar = () => {
  // const {isScrolled, disableScroll} = useScrollEffect(500, 1000)/**Đặt threshold =500 pixel */

  return (
    <div className='relative flex-none w-12/12  
          '>
          {/* parent div chứa filter, đặt relative cho div cha và đặt sticky cho div con để di chuyển cùng khi scroll */}
            <div className={`flex flex-col   text-black rounded-md h-min w-8/12 mx-auto my-5
             sticky top-0 z-10
            `}>
            {/* chilren div */}
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
  )
}

export default ListingFilterBar