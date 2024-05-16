'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Star } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { SquarePlus } from 'lucide-react';
import { Badge } from "@/components/ui/badge"


const ListingCard = ({

    title,
    subtitle,
    slug,
    src,
    alt,
    addressOfStore,
    reviewOfStore,
    badge
}) => {
    return (
        <div
            className=' max-w-sm min-w-[280px] md:min-w-[300px] relative flex flex-col justify-between items-start h-[300px]'>
            {/* div headCard */}
            <div className='relative flex flex-none h-[200px] w-full group transition-all duration-300 overflow-hidden'>
                {/* Dùng flex-none và set height cố định để phần hình ảnh không giãn nở theo độ cao của ảnh */}
                <div className='absolute left-60 top-3  z-20'>
                    {/* <Heart strokeWidth={1}
                                    className='listing__favourite w-full text-white  transition-all duration-300 '
                                    width={40}
                                    height={40}
                                /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 16 16"><path fill="white" d="M14.88 4.78a3.5 3.5 0 0 0-.37-.9a3.2 3.2 0 0 0-.6-.79a3.8 3.8 0 0 0-1.21-.81a3.74 3.74 0 0 0-2.84 0a4 4 0 0 0-1.16.75l-.05.06l-.65.65l-.65-.65l-.05-.06a4 4 0 0 0-1.16-.75a3.74 3.74 0 0 0-2.84 0a3.8 3.8 0 0 0-1.21.81a3.55 3.55 0 0 0-.97 1.69a3.8 3.8 0 0 0-.12 1c0 .318.04.634.12.94a4 4 0 0 0 .36.89a3.8 3.8 0 0 0 .61.79L8 14.31l5.91-5.91c.237-.232.44-.498.6-.79A3.6 3.6 0 0 0 15 5.78a3.8 3.8 0 0 0-.12-1" /></svg>

                </div>
                <div className='absolute left-2 bottom-2 w-full z-20'>
                    <Badge className='bg-primary text-white shadow-md'>{badge}</Badge>
                </div>
                <Link
                    href={`/listing/${slug}`}
                    className='h-full w-full cursor-pointer'>
                    <Image
                        alt={alt}
                        src={src}
                        height={150}
                        width={250}
                        className='object-cover rounded-t-md w-full h-full shadow-md group-hover:filter group-hover:brightness-90 duration-300 transition-all z-10 '
                    />

                </Link>

            </div>
            {/* div bodyCard */}
            <div className=' w-full h-[80px]'>
                <Link href="/">
                    <h3 className='font-medium text-lg text-black line-clamp-1 hover:text-primary cursor-pointer'>
                        {title}
                    </h3>
                    <p className='font-light text-sm md:text-md text-neutral-700 line-clamp-1'>
                        {subtitle}
                    </p>
                </Link>
                <div className='flex flex-row justify-start items-center gap-1 text-neutral-500 font-light text-xs md:text-ms'>
                    {/* <MapPin /> */}
                    <p className='line-clamp-1'>{addressOfStore}</p>
                </div>

            </div>
            {/* div footerCard */}
            <div className='flex flex-row h-[50px] justify-between gap-3 items-center border-t-primary'>
                <span className='flex flex-row items-center gap-0.5 font-medium border-r-[1px] pr-2'>
                    {reviewOfStore}
                    <Star className='text-yellow-400 inline-block' /></span>
                <p className='text-sm font-light rounded-md py-0 px-1'>
                    <span className='text-orange-700 font-bold'>
                        252 </span>
                    reviews
                </p>
                <Link href='/' className='font-normal border-l-[1px] pl-2' ><p>Xem thêm</p></Link>

            </div>
        </div>
    )
}

export default ListingCard