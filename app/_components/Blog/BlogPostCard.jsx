import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LockKeyhole } from 'lucide-react';
import styles from './blog.module.css'
import { useRouter } from 'next/navigation';

const BlogPostCard = ({
    id,
    title,
    bodyText,
    img,
    authorName,
    authorAvatar,
    publishedDate,
    category,
    slug,
    onClick

}) => {
    
  
    
    return (
        <>

            <div className='
         
        flex flex-col justify-between items-start gap-1
        max-w-sm min-w-[280px] md:w-[300px] h-[400px] 
        relative
        overflow-hidden
        cursor-pointer
        group
        '
        key={id}>
            {/* image */}
            <div className='w-full flex-none h-[200px] overflow-hidden rounded-t-md '>
                <Link 
                href={"/blog/"+slug || '/'}
                className='w-full'
                onClick={onClick}>
                <Image
                    src={img}
                    alt={title}
                    width={250}
                    height={150}
                    className='object-cover w-full h-full rounded-t-md shadow-md z-10
                    group-hover:filter group-hover:brightness-75 group-hover:scale-110
                    transition-all duration-300
                    '
                />
                </Link>
            </div>
            {/* info */}
            <div className='w-full flex-1 h-[100px] '>
                <div className='my-2'>
                    <div className='flex flex-row gap-2 my-2 '>
                        
                        <p className='flex flex-row items-center text-sm font-semibold text-orange-800 bg-neutral-200 rounded-full px-3 py-0'>
                        <span>
                        <LockKeyhole strokeWidth={0.75} size={20} className='inline-block mr-1 line-t' />
                        </span>
                        Members only
                        </p>
                        <p className='text-sm font-medium text-primary bg-neutral-200 rounded-full px-3 py-0'>#{category}</p>
                    </div>
                    <h3 className='text-black text-lg font-semibold line-clamp-1 hover:text-primary'>{title}</h3>
                    <p className='text-neutral-500 text-base font-medium line-clamp-2'>{bodyText}</p>
                </div>
                <Link 
                href="/"
                className='flex flex-row items-start gap-3'>
                    <Image
                        src={authorAvatar}
                        width={40}
                        height={40}
                        alt={authorName}
                        className={`object-cover h-[40px] rounded-full ${styles.imageAvatar}`}
                    />
                    <div className='text-base font-medium'>
                        <p className='
                        text-sm font-medium
                        md:text-base md:font-semibold'>
                        {authorName}</p>
                        <p className='text-xs font-light
                        md:text-sm md:font-medium
                        '>{publishedDate}</p>
                    </div>
                </Link>
            </div>
        </div>


       
        
        
    
        </>
        )
}

export default BlogPostCard