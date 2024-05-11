

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
    <div 
    onClick={onClick}
    onBlur={onBlur}
    className="relative flex flex-none w-full md:flex-auto flex-shrink-0 w-12/12 md:w-[450px]mx-auto">
    <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 border-l-[1px] bg-neutral-100"
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        /**Để đảm bảo trường đầu vào được đồng bộ hóa với URL và sẽ được điền khi chia sẻ, bạn có thể chuyển sang defaultValueđầu vào bằng cách đọc từ searchParams */
      />
      <Search className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 "/>
    </div>
  )
}

export default SearchForm