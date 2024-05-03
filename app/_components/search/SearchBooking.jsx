import React from 'react'
import { DatePickerDemo } from '../DatePicker'
import { Input } from '@/components/ui/input'
import ThemeDropdown from '../dropDown/ThemeDropdown'
import ThemeButton from '../ThemeButton'
import { Search } from 'lucide-react'

const SearchBooking = () => {
  return (
    <div>
      
      <div className='relative flex flex-row justify-center items-center gap-3 border-[2px] border-primary w-8/12 h-14 mx-auto rounded-lg shadow-lg my-10 px-2'>
      
        <Input 
          type="text"
          placeholder="Sơn Trà, Đà Nẵng"
          className=" cursor-pointer focus:outline-none "
        />
      
        <DatePickerDemo />
        <div>
        <ThemeDropdown />
        </div>
        <div>
          <ThemeButton>
            <p className='hidden md:block'>SEARCH</p>
            <Search className='block md:hidden' />
          </ThemeButton>
        </div>
      </div>
      <h2 className='text-center font-semibold text-lg'>Bạn đang muốn booking lịch danh mục Category tại Đà Nẵng.</h2>

    </div>
  )
}

export default SearchBooking