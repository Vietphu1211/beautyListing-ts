import { listingCategoryItem } from '@/app/_data/listingCategoryItem'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import Container from '../Container'
import SlidingHandleButton from '../SlidingHandleButton'

const CategoryList = () => {
    const getCategoryData = listingCategoryItem

    const reflist = useRef();
    const scrollLeftHandle = ()=>{
        reflist && reflist.current.scrollBy({
            left:-300,
            behavior:"smooth"
        })
    }
    const scrollRightHandle = ()=>{
        reflist && reflist.current.scrollBy({
            left:300,
            behavior:"smooth"
        })
    }
    return (
        <div>
            <div 
            ref={reflist}
            className=' grid grid-cols-3 md:flex flex-row justify-start md:justify-center items-center gap-2 overflow-auto md:overflow-hidden'>
                {
                    getCategoryData && getCategoryData.map((cate) => (
                        <Link href={cate.slug} key={cate.id}
                            className='flex flex-col justify-center items-center gap-1 border-[1px] min-w-[110px] rounded-md py-1 px-0 md:py-1 md:px-1 shadow-md'
                        >
                            {/* {cate.icon} */}
                            <p className='text-sm font-medium line-clamp-1 text-white'>{cate.title}</p>
                        </Link>
                    ))
                }
            </div>
<div className='my-2'>
    <SlidingHandleButton
        scrollLeftHandle={scrollLeftHandle}
        scrollRightHandle={scrollRightHandle}
    />
</div>
          
        </div>

    )
}

export default CategoryList