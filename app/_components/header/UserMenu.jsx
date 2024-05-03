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
            className='flex flex-row gap-1 text-gray-500 hover:text-primary cursor-pointer  border-[0.5px] border-black rounded-md p-[1px]' >
                <CircleUser />
                <AlignJustify
                className='block md:hidden'
                onClick={onClick} 

                />
            </div>
            {/* <Navbar /> */}
        </>
    )
}

export default UserMenu