import React, { useState } from 'react'
import { DatePickerDemo } from '../DatePicker'
import { Input } from '@/components/ui/input'
import ThemeDropdown from '../dropDown/ThemeDropdown'
import ThemeButton from '../ThemeButton'
import { Search } from 'lucide-react'
import Modal from '../modals/Modal'
import CarouselComponent from '../CarouselComponent'

const SearchBooking = () => {
  const [isopen, setIsopen] = useState(false)
  const modalHandleOpen = () => {
    setIsopen(!isopen)
  }

  const modalHandleClose = ()=> {
    setIsopen(false)
  }


  const body= (
    <div>
        <SearchBooking />
        <div>
        <p>Từ khóa tìm kiếm phổ biến theo khu vực</p>
        <CarouselComponent />
        </div>
    </div>
  )

  return (
    <div className=''>
      
      <div className='relative flex flex-row justify-center items-center gap-3 border-[1px] border-primary w-12/12 md:w-8/12 lg:w-6/12 h-11 md:h-14 mx-auto rounded-xl md:rounde-lg shadow-lg  p-1'>
        <Input 
          type="text"
          placeholder="Sơn Trà, Đà Nẵng"
          className="cursor-pointer focus:outline-none outline-none focus-visible:outline-none mx-1 my-1 h-full"
          onClick={()=> modalHandleOpen()}
        />
      { isopen && 
      <Modal 
       modalHandleClose={()=> modalHandleClose() }
        title="vui lòng chọn địa điểm hoặc cửa hàng"
        body={body}
        


      />}
        {/* <DatePickerDemo /> */}
        {/* <div>
        <ThemeDropdown />
        </div> */}
        <div className=''>
          <ThemeButton>
            <p className='hidden md:block'>SEARCH</p>
            <Search className='block md:hidden' />
          </ThemeButton>
        </div>
      </div>
      

    </div>
  )
}

export default SearchBooking