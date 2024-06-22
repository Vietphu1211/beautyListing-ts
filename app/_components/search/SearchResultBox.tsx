import { serviceData } from '@/app/_data/serviceData'
import Link from 'next/link'
import { Search, SquareCheck } from 'lucide-react';
import listingCardItem from '@/app/_data/getListingData';
import Image from 'next/image';
import { Suspense } from 'react';

const SearchResultBox = ({
    query,
    serviceLabel,
    recomendedLabel,
    businessLabel
}) => {
    const getServiceData = serviceData /** Có thể dùng await fetch(query, currentPage) để gọi API lấy dữ liệu về ở đây */
    // const stringQuery = query.toString()
    const filteredServiceData = getServiceData.filter(service => service.title.includes(query))
    
    const getBusinessData = listingCardItem
    const filterBusinessData = getBusinessData.filter(business => business.title.includes(query))

   
    filteredServiceData.forEach(item=>{
        console.log(item)
    })
    // console.log("alo check>>"+stringQuery)
   
    return (
        <div className='w-full  flex flex-col gap-5 mt-5'>
            {/* div này thể hiện những tìm kiếm gần đây */}
            <div>
                <h3 className='font-normal text-sm md:font-semibold md:text-base'>{serviceLabel}</h3>
                {/* chổ này để render những gì user đã search mới nhất */}
                <div className=' w-3/12 mt-2'>
                    {filteredServiceData && filteredServiceData.map((service, index) => (
                       
                       <Link key={index} href={service.slug}
                            className='text-sm whitespace-nowrap flex flex-row items-center gap-2'>
                            {/* <SquareCheck  className='mx-1 text-neutral-500 text-sm'/> */}
                            <Search  className='w-5 h-5'/>
                            {service.title}

                        </Link>
                    
                        
                    ))}
                </div>
            </div>

{/* results of filtering by business */}
            <div className='flex flex-col justify-center'>
                <h3 className='font-normal text-sm md:font-semibold md:text-base'>{businessLabel}</h3>
                {/* chổ này để render những gì user đã search mới nhất */}
                <div className='flex flex-col justify-center w-12/12 gap-3 '>
                    {filterBusinessData && filterBusinessData.map((business) => (
                        <Link key={business.listingId} href={`listing/${business.slug}`}
                            className=' text-sm whitespace-nowrap mt-3 flex flex-row justify-start items-center gap-3 h-[35px] overflow-hidden'>
                            {/* <SquareCheck  className='mx-1 text-neutral-500 text-sm'/> */}
                            <Image
                            src={business.src} 
                            alt={business.alt}
                            width={40}
                            height={40}
                            className='rounded-md object-cover h-full'
                            />
                            <div className='flex flex-col'>
                            <p>
                            {business.title}
                            </p>
                            <p className='text-sm text-neutral-500'>

                            {business.addressOfStore}
                            </p>
                            </div>

                        </Link>
                    ))}
                </div>
            </div>

{/* results of filtering by Recomendation */}

                {/* tạo truy vấn api từ máy chủ lấy các dịch vụ khớp với từ khóa cần tìm. Nếu inputValue === title của service thì render ra các cửa hàng có service đó nếu click vào search */}
            {/* <div>
                <h3 className='font-normal text-sm md:font-semibold md:text-base'>{recomendedLabel}</h3>

                <div className=' w-8/12 '>
                    {filteredServiceData && filteredServiceData.map((service, index) => (
                        <Link key={index} href={service.slug}
                            className='bg-neutral-200 rounded-sm p-2 mx-2 text-sm whitespace-nowrap mt-4 flex flex-row items-center'>
                            {service.title}

                        </Link>
                    ))}
                </div>
            </div> */}
            
        </div>
    )
}

export default SearchResultBox