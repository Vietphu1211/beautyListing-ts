import React from 'react'
import BookingModal from '../modals/BookingModal'
import { Button } from '@/components/ui/button'

const Ctabtn = () => {
  return (
    <div className="md:hidden bg-neutral-100/5 flex flex-row justify-center items-center gap-3 px-10 py-1 sticky bottom-3 z-50">
    <div className='flex flex-row flex-1 bg-primary text-white justify-center px-2 py-2 w-full mx-auto rounded-md shadow-xl hover:-translate-y-1 cursor-pointer duration-500'>
            <BookingModal />
          </div>
          <Button variant="outline" className=" border-secondary flex-1 py-3 h-[40px] shadow-xl hover:-translate-y-1 cursor-pointer duration-300">
                <span className='text-base font-normal'>
                  Nhắn tin
                </span>
              </Button>
    </div>
  )
}

export default Ctabtn