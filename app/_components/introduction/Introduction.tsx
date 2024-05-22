import Image from 'next/image'
import React from 'react'
import Heading from '../Heading'
import ThemeButton from '../CustomButton'
import { LogIn } from 'lucide-react'
import Link from 'next/link'
import { FileCheck2 } from 'lucide-react';
const Introduction = () => {
    return (
        <div className='bg-primary mt-10 mb-16'>
            <div className='w-full h-auto flex flex-row justify-center
            
            '>
                <div className=' flex flex-col md:flex-row justify-center items-start gap-20'>
                    <Image
                        src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt='barber shop'
                        width={300}
                        height={200}
                        className='object-cover flex-none translate-y-10 shadow-lg rounded-md'

                    />
                    <div className=' md:py-10 px-5 md:flex-none  w-12/12 md:w-5/12 '>
                        <h2 className='text-3xl lg:text-4xl font-bold text-white lowercase md:uppercase'>Khám phá các địa điểm dịch vụ tại Đà Nẵng</h2>
                        <div className='flex flex-col justify-start gap-5 text-white font-normal md:font-semibold my-5 '>
                            <div className='flex flex-row gap-2'>
                                <FileCheck2 strokeWidth={1} />
                                <h3>Tìm kiếm nhanh chóng</h3>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <FileCheck2 strokeWidth={1} />
                                <h3>Đặt trước lịch hẹn</h3>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <FileCheck2 strokeWidth={1} />
                                <h3>Tiết kiệm thời gian</h3>
                            </div>


                        </div>
                        <div className='flex flex-row items-center gap-3 my-4'>
                            <p className='text-white font-light text-sm'>Săn voucher khuyến mãi từ các tiệm mới mở </p>
                            {/* <div className='flex flex-row items-center gap-3'>
                        <Link href='/login' className='border-r-2 text-white'>
                            <p className='mx-3 text-sm'>Login</p>
                        </Link>
                        <Link href="/signup" className='text-sm'>
                            <p className=''>Sign up</p>
                        </Link>
                        <LogIn />
                        </div> */}
                        </div>
                        <ThemeButton>Nhận voucher</ThemeButton>
                        <div className='pb-7'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction