'use client'
import React from 'react'
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const SearchPlace = () => {
    return (
        <section>
            <div className="w-full h-[300px] relative flex justify-center items-center">
                <Image
                    src='https://images.unsplash.com/photo-1544816135-b44f18b3c5d6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='banner'
                    className='filter brightness-75 object-cover w-full h-full'
                    width={300}
                    height={150}
                />
                <div className='container flex flex-col justify-center items-center absolute w-full top-[30%]'>
                    <h2 className='text-white text-center text-2xl font-semibold m-2'>
                        Find Some nail store in Da Nang
                    </h2>
                    <div className='flex flex-row justify-between items-center w-full md:w-6/12 lg:8/12 mx-auto rounded-md bg-white'>

                    <input placeholder="type some keyword to search"
                        className="w-full md:w-[60%] lg:w-[70%] focus:outline-none px-2 py-auto"
                    />
                    <Button className="">
                    <Search />
                    </Button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SearchPlace