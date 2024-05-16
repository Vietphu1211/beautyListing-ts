import { listingCategoryItem } from '@/app/_data/listingCategoryItem'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Container from '../Container'
import SlidingHandleButton from '../SlidingHandleButton'




const CategoryList = () => {
    const getCategoryData = listingCategoryItem

    const reflist = useRef();
    const scrollLeftHandle = () => {
        console.log('left')
        reflist?.current?.scrollBy({
            left: -100,
            behavior: "smooth"
        })
    }
    const scrollRightHandle = () => {
        console.log('right')
        reflist && reflist.current.scrollBy({
            left: 100,
            behavior: "smooth"
        })
    }
const [isDisplay, setIsDisPlay] = useState(false)
    
    return (
        <div className='flex flex-col justify-center '>
            <div
                ref={reflist}
                className=' flex flex-row justify-center items-center gap-2 overflow-x-auto
                 md:overflow-hidden md:h-20'>
                {getCategoryData && getCategoryData.map((cate) => (

                    <Link href={cate.slug} key={cate.id} 
                        className='flex flex-col justify-center items-center gap-1 min-w-[110px] rounded-md py-1 px-0 md:py-1 md:px-1 hover:-translate-y-2 duration-500'
                    >
                        <span className='md:w-5'>{cate.icon}</span>
                        <p className='text-sm font-semibold line-clamp-1 text-neutral-100 shadown-sm'>{cate.title}</p>
                    </Link>
                ))
                }
            </div>
            <div className={`${isDisplay ? 'block' : 'hidden'}`}>
                <SlidingHandleButton
                    isDisplay={isDisplay}
                    scrollLeftHandle={scrollLeftHandle}
                    scrollRightHandle={scrollRightHandle}
                />
            </div>

        </div>

    )
}

export default CategoryList