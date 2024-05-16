'use client'
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

const Heading = ({
    title,
    subtitle,
}) => {
  return (
    <div className='my-5 flex flex-row justify-between items-center gap-5 md:gap-2
    '>
        <div>
        <Link href={'/listing'}>
        <h2 className='text-xl font-semibold text-black
        md:text-2xl
        md:font-semibold
        lg:text-4xl
        '>{title}</h2>
        </Link>
        <p className='text-base font-normal text-primary
        md:text-lg
        '>{subtitle}</p>
        </div>
        {/* <Link href='/listingPage'>
        <MoveRight strokeWidth={1.75} size={50} 
          className='border-2 rounded-md px-3 cursor-pointer hover:translate-x-1 transition-all duration-500 hover:text-primary '
        />
        </Link> */}
    </div>
  )
}

export default Heading