'use client'
import { ArrowDown, ArrowDownCircle, ArrowLeft, ArrowRight, ArrowRightCircle, ChevronDown, ChevronRight, Menu, MoveDown, X } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';



const HeaderBlog = () => {

const [isOpenMenu, setIsOpenMenu] = useState(false)
const [showDropdown, setShowDropdown] = useState(false);
    const dropdownHandleClick = () => {
        setShowDropdown(!showDropdown)
        setIsOpenMenu(!isOpenMenu)
        // console.log(categoryItemList)
}
const selectedCateHandleClick = () => {
    setIsOpenMenu(false);
}


    return (
        <div className='flex flex-row justify-between items-center mx-auto w-11/12 md:w-8/12 my-3 relative'>
            <Link
            href={'/'} 
            className={`flex flex-row gap-3 items-center rounded-md  px-3 py-2  duration-300 border-0 hover:text-primary `}>
                <ArrowLeft />
                <p className='font-semibold'>
                    Về trang chủ
                </p>
            </Link>
            <Link
                href='/listings'
                className='font-semibold flex flex-row items-center gap-3 hover:text-primary'
            >
                <p>Tìm cửa hàng</p>
                <ArrowRight />
            </Link>


            {/* dropdown content */}

            {/* {showDropdown && (
                <div className='
                flex flex-col gap-2 bg-neutral-50 absolute left-0 top-16 mx-auto w-full h-min z-50 px-3 py-5 rounded-b-md my-1'>
                    {categoryItemList?.map((cate)=> (
                        <Link 
                        className='text-sm font-semibold flex flex-row items-center gap-2'
                        onClick = {selectedCateHandleClick}
                        key={cate.slug} href={`blog?cate=${cate.slug}`}>
                            {cate.name}
                            <ChevronRight strokeWidth={1} size={12} />

                        </Link>
                    ))}
                </div>
            )} */}
        </div>

    )
}

export default HeaderBlog;

