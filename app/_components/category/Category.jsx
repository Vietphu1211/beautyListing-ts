'use client'
import { listingCategoryItem } from '@/app/_data/listingCategoryItem';
import Heading from '../Heading';
import Container from '../Container';

import Link from "next/link"
import Image from 'next/image'
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import SlidingHandleButton from '../SlidingHandleButton';
import { useRouter, useSearchParams } from 'next/navigation';

const Category = () => {
    const listRef = useRef(null)
    const scrollRightHandle = () => {
        if (listRef.current) {
            listRef.current.scrollBy({
                left: 300,
                behavior: "smooth"
            })
        }
    }
    const scrollLeftHandle = () => {
        if (listRef.current) {
            listRef.current.scrollBy({
                left: -300,
                behavior: "smooth"
            })
        }
    }
    const categorylist = listingCategoryItem;

    // update slug category bằng param

    const params = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState('all')
    useEffect(()=> {
        setSelectedCategory(params.get('category'))
    },[params])



    return (
        <section className=''>
            <Container>
                <Heading
                    title="Explore Some Category"
                    subtitle="Discovering some category in your area with real reviews form guests"
                />

                <div className='flex flex-row justify-start items-center gap-2 overflow-auto md:overflow-hidden overflow-y-hidden'
                    ref={listRef}>
                    {
                        categorylist && categorylist.map((cate, index) => (
                            <Link href={`/listings/${cate.slug}`} key={index}
                                className={` relative cursor-pointer flex flex-col justify-center items-center group min-w-52 h-[150px] overflow-hidden
                                ${selectedCategory === cate.slug && 'border-2 border-black rounded-lg'}
                                `
                                }>
                                <Image alt={cate.alt} src={cate.img}
                                    fill
                                    className='filter brightness-90 group-hover:brightness-50 group-hover:scale-125 object-cover rounded-lg w-full h-full  transition-all duration-300' />
                                <h3 className='absolute text-white text-xl translate-y-5 group-hover:translate-y-0 transition-all duration-300 z-10'>{cate.title}</h3>
                            </Link>
                        ))}
                </div>
                <SlidingHandleButton
                    scrollLeftHandle={() => scrollLeftHandle()}
                    scrollRightHandle={() => scrollRightHandle()}
                />
            </Container>
        </section>
    )
}

export default Category