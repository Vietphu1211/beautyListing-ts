'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Star } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { SquarePlus } from 'lucide-react';
import listingCardItem from '@/app/_data/listingData';

const ListingCard = () => {
    const listingCard = listingCardItem;
    return (
        <>
            {
                listingCard && listingCard.map((listing, index) => (
                    /**  */
                    <div key={index}
                        className='border-2 border-x-primary-foreground max-w-sm min-w-[250px] md:min-w-[270px] shadow-lg p-1 relative flex flex-col justify-between items-start h-[350px]'>
                        {/* div headCard */}
                        <div className='flex-none h-[200px] w-full group transition-all duration-300 overflow-auto'>
                        {/* Dùng flex-none và set height cố định để phần hình ảnh không giãn nở theo độ cao của ảnh */}
                            <div className='absolute w-full z-20'>
                                <SquarePlus strokeWidth={0.75}
                                    className='listing__favourite font-light -translate-y-16 translate-x-16 group-hover:translate-x-16 group-hover:translate-y-16 group-hover:opacity-100 opacity-100 w-full text-white  transition-all duration-300 '
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <Link 
                            href='/'
                            className='h-full cursor-pointer'>
                                <Image
                                    alt={listing.alt}
                                    src={listing.src}
                                    height={150}
                                    width={250}
                                    className='object-cover rounded-t-md w-full h-full shadow-md group-hover:filter group-hover:brightness-50 duration-300 transition-all z-10 '
                                />
                            </Link>
                        </div>
                        {/* div bodyCard */}
                        <div className=' w-full h-[100px]'>
                            <Link href="/">
                            <h3 className='font-medium text-lg text-black line-clamp-1 hover:text-primary cursor-pointer'>
                                {listing.title}
                            </h3>
                            <p className='font-light text-sm md:text-md text-neutral-700 line-clamp-2'>
                                {listing.subtitle}
                            </p>
                            </Link>
                            <div className='flex flex-row justify-start items-center gap-1 text-neutral-500 font-light text-xs md:text-ms'>
                                <MapPin />
                                <p className='line-clamp-1'>{listing.addressOfStore}</p>
                            </div>

                        </div>
                        {/* div footerCard */}
                        <div className='flex flex-row h-[50px] justify-around gap-3 items-center'>
                            <span className='flex flex-row items-center gap-0.5 font-medium border-r-[1px] pr-2'>
                                {listing.reviewOfStore}
                                <Star className='text-yellow-400 inline-block' /></span>
                            <p className='text-sm font-light border border-solid border-orange-300 rounded-md py-0 px-1'><span className='text-orange-700 font-bold'>252 </span>
                                reviews
                            </p>
                            <Link href='/' className='font-semibold border-l-[1px] pl-2' ><p>Detail</p></Link>

                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ListingCard