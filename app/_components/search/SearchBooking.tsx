import { Input } from '@/components/ui/input'
import ThemeButton from '../CustomButton'
import { Search } from 'lucide-react'
const SearchBooking = () => {
  return (
    <div className=''>
      
      <div className='relative flex flex-row justify-center items-center gap-3 border-[1px] border-primary w-12/12 md:w-8/12 lg:w-6/12 h-11 md:h-14 mx-auto rounded-xl md:rounde-lg shadow-lg  p-1'>
        <Input 
          type="text"
          placeholder="Sơn Trà, Đà Nẵng"
          className="cursor-pointer  mx-1 my-1 h-full"
        />
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