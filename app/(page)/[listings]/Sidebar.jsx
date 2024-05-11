import ThemeButton from '@/app/_components/ThemeButton';
import BookingModal from '@/app/_components/modals/BookingModal'
import { Button } from '@/components/ui/button';
import { Smartphone } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  return (
  <div className='hidden md:flex'>
      <div className='flex-none w-12/12 bg-neutral-50 p-4 rounded-sm shadow-md border-[1px] border-neutral-300 sticky top-0 z-10 h-min'>
      <div className=''>
        {/* Book button */}
        <div className='bg-primary text-white px-2 py-3 text-center w-6/12 mx-auto rounded-md'>
          <BookingModal />
        </div>
        {/* contact */}
        {/* opening hour */}
        <div className='my-4'>
          <div className='flex flex-row justify-between items-center '>
            <h3>Liên hệ</h3>
            <div className='flex flex-row'>
              <Smartphone />
              <span>0905279544</span>
            </div>
            <div>
              <Link
                href={""}
                className='border-[1px] border-neutral-500 rounded-sm px-4 py-2 '
              >Gọi</Link>
            </div>
          </div>
          <h4 className='text-base font-medium my-2 border-b-[1px]'>Lịch làm việc</h4>
          <div className='flex flex-col gap-2'>

            <div className='flex flex-row justify-between items-start'>
              <div>
                <p className='text-sm font-light'>Thứ 2</p>
              </div>
              <div><p className='text-sm font-light'>Mở cửa</p></div>
            </div>
            <div className='flex flex-row justify-between items-start'>
              <div>
                <p className='text-sm font-light'>Thứ 2</p>
              </div>
              <div><p className='text-sm font-light'>Mở cửa</p></div>
            </div><div className='flex flex-row justify-between items-start'>
              <div>
                <p className='text-sm font-light'>Thứ 2</p>
              </div>
              <div><p className='text-sm font-light'>Mở cửa</p></div>
            </div><div className='flex flex-row justify-between items-start'>
              <div>
                <p className='text-sm font-light'>Thứ 2</p>
              </div>
              <div><p className='text-sm font-light'>Mở cửa</p></div>
            </div><div className='flex flex-row justify-between items-start'>
              <div>
                <p className='text-sm font-light'>Thứ 2</p>
              </div>
              <div><p className='text-sm font-light'>Mở cửa</p></div>
            </div><div className='flex flex-row justify-between items-start'>
              <div>
                <p className='text-sm font-light'>Thứ 2</p>
              </div>
              <div><p className='text-sm font-light'>Mở cửa</p></div>
            </div>
          </div>
        </div>
        <div>
          <h4 className='text-base font-medium my-2 border-b-[1px]'>Giờ mở cửa</h4>
          <div>
            <p>9 giờ - 21 giờ</p>
          </div>
        </div>
        <div>
          <h4 className='text-base font-medium my-2 border-b-[1px]'>Ngày nghỉ lễ</h4>
          <div>
            <p>Không có</p>
          </div>
        </div>

        <div>
          <h4 className='text-base font-medium my-2 border-b-[1px]'>Chính sách hủy đặt lịch</h4>
          <div>
            <p>9 giờ - 21 giờ</p>
          </div>
        </div>
        <div>
          <h4 className='text-base font-medium my-2 border-b-[1px]'>Ngày nghỉ lễ</h4>
          <div>
            <p>Không có</p>
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Sidebar