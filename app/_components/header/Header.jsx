'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Navbar from './Navbar'
import UserMenu from './UserMenu'
import { BookHeart } from 'lucide-react';
import Image from 'next/image'

import listNavItem from '@/app/_data/navItem'
import styles from './header.module.css'
const Header = () => {
    const navItem = listNavItem

    const [isOpenMenu,setIsOpenMenu] = useState(false)
    const dropDownMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }
    return (
        <section className='container relative my-3'>
            <div className='flex flex-row justify-between items-center'>
                <Link href='/'>
                    <Image
                        alt='logo'
                        src='./logo.svg'
                        width={60}
                        height={60}
                        className='inline-block'
                    />
                </Link>
                <div className='flex flex-row gap-5 justify-center items-center'>
                <Navbar />
                <div className='hidden md:flex flex-row justify-center items-center gap-3'>
                    <Link href='/login' className='border-r-2'>
                        <p className='mx-3 text-sm'>Login</p>
                    </Link>
                    <Link href="/signup" className='text-sm'>
                        <p>Sign up</p>
                    </Link>
                </div>
                <BookHeart 
                strokeWidth={1.5}
                width={30}
                height={30}
                className='text-neutral-600 hover:text-primary cursor-pointer'/>
                <UserMenu 
                    onClick={() => dropDownMenu()}
                />
                </div>
            </div>
           { isOpenMenu && (
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
           ) }
        </section>
    )
}

export default Header