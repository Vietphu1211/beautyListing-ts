import listNavItem from '@/app/_data/navItem';
import Link from 'next/link'
import React from 'react'

 const Navbar = () => {
    const navItem = listNavItem;
  return (
    <nav className='hidden sm:flex-row md:flex md:flex-row justify-around items-center gap-3 font-medium text-sm text-white'>
    {navItem && navItem.map((item, index)=>(
        <Link href={item.path} key={index}>
        <h2 className='hover:text-primary'>
        {item.title}
        </h2>
        </Link>
    ))}
    </nav>
  )
}

export default Navbar