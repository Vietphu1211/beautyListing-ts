'use client'
import listNavItem from '@/app/_data/navItem';
import { AlignJustify } from 'lucide-react';
import { CircleUser } from 'lucide-react';
const UserMenu = ({
    onClick
}) => {
    const navItem = listNavItem
    // console.log(navItem)
    return (
        <>
            <div
            className='flex flex-row gap-1 text-white hover:text-primary cursor-pointer rounded-md md:p-[1px]' >
                <CircleUser className='hidden md:block'/>
                <AlignJustify
                className='block md:hidden  w-8 h-8'
                onClick={onClick} 
                />
            </div>
        </>
    )
}

export default UserMenu