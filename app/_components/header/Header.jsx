'use client'
import Link from 'next/link'
import React, { Suspense, useState } from 'react'
import Navbar from './Navbar'
import UserMenu from './UserMenu'
import { CornerUpLeft, Heart, Search } from 'lucide-react';
import Image from 'next/image'

import listNavItem from '@/app/_data/navItem'
import styles from './header.module.css'
import Container from '../Container'
import SearchForm from '../search/SearchForm'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import PostCardSkeleton from '../skeleton/PostCardSkeleton'
import SearchResultBox from '../search/SearchResultBox'
import { useDebouncedCallback } from 'use-debounce'
import DialogComponent from '../dialog/SearchDialog'
import { title } from 'process'
/**Dùng hook DebounceCallback để set time truy vấn dữ liệu */


const Header = () => {
    const [isOpenResultBox, setIsOpenResultBox] = useState(false)
    const navItem = listNavItem

    const searchParams = useSearchParams();
    /**Dùng hook useSearchParams để cập nhật url trước khi truy vấn và gán vào biến searchParams */
    const params = new URLSearchParams(searchParams);
    /**Sử dụng URLSearchParams nhận vào giá trị của biến searchParams */
    const pathname = usePathname();
    // sử dụng hook usePathname() lấy url root hiện tại đang đứng. Ví dụ đang ở ở trang chủ sẽ là'/'. Đang đứng ở localhost:300/listings/ sẽ là '/listings/'
    const { replace } = useRouter();
    // destructuring replace từ hook useRouter() để cập nhật url

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const dropDownMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }
    // dùng useDebouncedCallback để set sau 1s mới lấy những gì đã nhập 
    const handleChange = useDebouncedCallback((term) => {
        // console.log("check term",term)

        // truyền vào param term, sau đó kiểm tra term: nếu tồn tại ký tự thì set() để cập nhật, null hoặc undefine thì delete truy vấn 'q' đi
        if (term) {
            params.set('q', term)
        }
        else {
            params.delete('q')
        }
        /**Bây giờ bạn có chuỗi truy vấn. Bạn có thể sử dụng các hook useRoutervà hook của Next.js usePathname để cập nhật URL. */
        /**Nhập useRoutervà usePathnametừ 'next/navigation'và sử dụng replacephương thức từ useRouter()bên trong handleSearch: */
        replace(`${pathname}?${params.toString()}`)
    }, [1000])
    /**${pathname}là url của trang hiện tại,chẳng hạn là "/dashboard/invoices/".
       Khi người dùng nhập vào thanh tìm kiếm, params.toString()nó sẽ chuyển thông tin đầu vào này sang định dạng thân thiện với URL.
       replace(${pathname}?${params.toString()})cập nhật URL với dữ liệu tìm kiếm của người dùng. Ví dụ: /dashboard/invoices?query=lee nếu người dùng tìm kiếm "Lee".
       URL được cập nhật mà không cần tải lại trang nhờ vào tính năng điều hướng phía máy khách của Next.js */

    // Đối với việc cập nhật page cho panavigation có thể làm tương tự bằng các truyền vào param page và dùng hàm onClick tương ứng.

    const query = String(params.get('q'))
    // sau khi cập nhật url dùng params.get('q') để lấy value của 'q' và lưu vào biến query. Dùng query truyền xuống props query của component <SearchResultBox />


    const description = (
        <>
            <SearchForm
                placeholder="Tìm kiếm dịch vụ hoặc cửa hàng..."
                onChange={(e) => { handleChange(e.target.value) }}
                onClick={() => setIsOpenResultBox(true)}
                onBlur={() => setIsOpenResultBox(false)}
                defaultValue={() => { }}
            />
            <SearchResultBox
                query={query}
                serviceLabel='Kết quả tìm kiếm theo dịch vụ'
                recomendedLabel='Gợi ý tìm kiếm'
                businessLabel='Kết quả tìm kiếm theo cửa hàng '
            />

        </>
    )
    const label = (
        <div
            className="relative flex flex-none w-full md:flex-auto flex-shrink-0 w-12/12 md:w-[450px]mx-auto">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 border-l-[1px] bg-neutral-100"
                placeholder="tìm kiếm cửa hàng hoặc dịch vụ..."
            />
            <Search className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 " />
        </div>
    )
    const title = (
        <div className='flex flex-row justify-start items-center gap-5 mb-5'>
            <CornerUpLeft className='w-8 h-8 font-normal' />
            <h2 className='font-medium text-xl'>Tìm kiếm</h2>
        </div>
    )

    return (
        <>
            <div className='flex flex-row justify-start items-center gap-5
            md:flex-col md:justify-around md:items-center  '>
                {/* logo */}
                <Link href={'/'}>
                    <Image
                        alt='logo'
                        src='/logo.svg'
                        width={60}
                        height={60}
                        className='hidden md:inline-block'
                    />
                </Link>



                {/* navbar and user menu */}

                <div className='flex flex-row gap-5 justify-start items-center'>
                    <Navbar />
                    <div className='hidden md:flex flex-row justify-center items-center gap-3 text-white '>
                        <Link href='/login' className='border-r-2 hover:text-primary'>
                            <p className='mx-3 text-sm '>Login</p>
                        </Link>
                        <Link href="/signup" className='text-sm hover:text-primary'>
                            <p className='text-sm font-bold'>Sign up</p>
                        </Link>
                    </div>
                    <Heart
                        strokeWidth={1.5}
                        width={30}
                        height={30}
                        className='hidden md:block text-white hover:text-primary cursor-pointer' />
                    <UserMenu
                        onClick={() => dropDownMenu()}

                    />
                </div>

                {/* search bar */}
                <div
                    className='flex flex-col justify-center w-[320px] mx-2 md:flex-none  md:w-[550px] md:mx-auto '
                >
                    <DialogComponent
                        title={title}
                        description={description}
                        label={label}

                    />
                </div>
            </div>

            {/* Dropdown menu */}
            {isOpenMenu && (
                <div className='bg-neutral-100 flex flex-col justify-center items-center gap-5 py-5 rounded-md absolute w-full left-0 text-sm z-20'>
                    {navItem.map((item, index) => (
                        <Link key={index} href={item.path}>
                            <h2>
                                {item.title}
                            </h2>
                        </Link>
                    ))}
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <Link href='/login' className='border-r-2'>
                            <p className='mx-3 text-sm'>Login</p>
                        </Link>
                        <Link href="/signup" className='text-sm'>
                            <p className={styles.test}>Sign up</p>
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header