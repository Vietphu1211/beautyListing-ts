'use client'
import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import BackgroundVideo from '../BackgroundVideo';
import SearchContentDropdown from './SearchContentDropdown';

const SearchPlace = () => {
    const [isOpen, setIsOpen] = useState(true)

    const toogleDropdown = () => {
        setIsOpen(isOpen)
    }
    // const closeDropdown = () => {
    //     setIsOpen(false);
    //   };

    const [inputValue, setInputValue] = useState('');

    const getInputValue = (e) => {
        setInputValue(e.target.value)

        console.log(dropdownContent)
    }

    // dropdownContent display khi nhấn vào ô input của searchBar sẽ dropdown xuống 1 div thể hiện nội dung cho user tương tác 
    const dropdownContent = (
        <div className='absolute w-6/12 bg-white p-4'>
        {/* div này thể hiện những tìm kiếm gần đây */}
            <div>
            <h3>Tìm kiếm gần đây</h3>
            {/* chổ này để render những gì user đã search mới nhất */}
            </div>

            
            <div>
                {/* tạo truy vấn api từ máy chủ lấy các dịch vụ khớp với từ khóa cần tìm. Nếu inputValue === title của service thì render ra các cửa hàng có service đó nếu click vào search */}
            </div>
        </div>
    )
    return (
        <section>
            <div className="w-full h-[550px] relative flex justify-center items-center">
                <Image
                    src='https://images.unsplash.com/photo-1544816135-b44f18b3c5d6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='banner'
                    className='filter brightness-75 object-cover w-full h-full'
                    width={300}
                    height={150}
                />
                {/* <BackgroundVideo /> */}
                <div className='container flex flex-col justify-center items-center absolute w-full top-[30%]'>
                    <h2 className='text-white text-center text-2xl font-semibold m-2'>
                        Tìm salon làm đẹp gần nơi bạn ở
                    </h2>
                    <div className='flex flex-row justify-between items-center w-full md:w-6/12 lg:8/12 mx-auto rounded-md bg-white'>
                        <input
                            placeholder="Gõ danh mục cần tìm kiếm. Vd: cắt tóc nam, làm nail, massage chân"
                            className="w-full md:w-[60%] lg:w-[70%] focus:outline-none px-2 py-auto"
                            onClick={toogleDropdown}
                            // onBlur={closeDropdown}
                            value={inputValue}
                            onChange={getInputValue}
                        />
                        <Button className=""
                            onClick={() => { }}>
                            <Search />
                        </Button>
                    </div>
                    {isOpen && <SearchContentDropdown
                        dropdownContent={dropdownContent}

                    />}

                </div>
            </div>
        </section>
    )
}

export default SearchPlace