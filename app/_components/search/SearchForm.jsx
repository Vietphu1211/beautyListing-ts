

import { Search } from "lucide-react";


const SearchForm = ({
  placeholder,
  onChange,
  defaultValue,
  onClick,
  onBlur

}) => {

  // const searchParams = useSearchParams(); 
  return (
    <form
      onClick={onClick}
      onBlur={onBlur}
      className="relative flex flex-none w-full flex-shrink-0  md:flex-auto md:w-[300px]mx-auto">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full md:w-6/12 rounded-lg border-[1px]  py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 bg-neutral-100"
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
      /**Để đảm bảo trường đầu vào được đồng bộ hóa với URL và sẽ được điền khi chia sẻ, bạn có thể chuyển sang defaultValueđầu vào bằng cách đọc từ searchParams */
      />
      <Search className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 " />
    </form>
  )
}

export default SearchForm