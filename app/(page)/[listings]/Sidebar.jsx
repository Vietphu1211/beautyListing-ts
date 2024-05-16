import ThemeButton from '@/app/_components/ThemeButton';
import BookingModal from '@/app/_components/modals/BookingModal'
import { Button } from '@/components/ui/button';
import { Smartphone } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='hidden md:flex w-full h-full md:flex-none'>
      <div className='flex flex-row justify-center flex-none w-full h-min p-4 rounded-sm shadow-lg border-[1px] '>
        <div className='flex flex-col justify-center items-center w-full h-min'>

          {/* CTA button */}
          {/* Đặt lịch hẹn btn */}
          <div className='flex justify-center bg-primary text-white px-2 py-3 w-full mx-auto rounded-md'>
            <BookingModal />
          </div>

          {/* Gọi và gửi tin nhắn */}
          <div className='my-4 w-full'>
            <div className='flex flex-row justify-between gap-3 w-full'>
              <Button variant="outline" className=" border-secondary flex-1 ">
                <span className='text-base font-normal'>
                  Gọi
                </span>
              </Button>
              <Button variant="outline" className="p-4 border-secondary flex-1  ">
                <span className='text-base font-normal'>
                  Gửi tin nhắn
                </span>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Sidebar