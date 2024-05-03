'use client'
import { BreadcrumbCollapsed } from '@/app/_components/BreadcrumbCollapsed'
import Container from '@/app/_components/Container'
import Heading from '@/app/_components/Heading'
import Footer from '@/app/_components/footer/Footer'
import Header from '@/app/_components/header/Header'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import BlogPostCard from '@/app/_components/Blog/BlogPostCard'
import Blog from '@/app/_components/Blog/Blog'

export default function Page() {
  const router = useRouter()
  return (
    <>
      <Header />
      <Container>
        <BreadcrumbCollapsed />
        <div className='w-full md:w-[80%] lg:w-[60%] mx-auto px-1'>
        {/* heading of post */}
          <div>
            <h2 className='font-semibold text-xl'>
              What is Sales Planning? How to Create a Sales Plan
            </h2>
            <div className='flex flex-row justify-between'>
            {/* info author and publishedDate */}
              <div className='flex flex-row justify-start items-center gap-1'>
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt='author avatar'
                  width={40}
                  height={40}
                  className='rounded-full shadow-sm'
                />
                <p>Robert</p>
              </div>
              <p>Published: December 06, 2023</p>
            </div>
            {/* content of post */}
            <div>
              <p>Sales planning is a fundamental component of sound selling. After all, you can‘t structure an effective sales effort if you don’t have, well, structure. Everyone — from the top to the bottom of a sales org — benefits from having solid, actionable, thoughtfully organized sales plans in place.</p>
              <Image
                src="https://images.unsplash.com/photo-1713341087485-a8cf83fdeafb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
                alt="text"
                width={500}
                height={200} />
              <p>
                "This kind of planning offers clarity and direction for your sales team — covering everything from the prospects you‘re trying to reach to the goals you’re trying to hit to the insight you're trying to deliver on.But putting together one of these plans isn‘t always straightforward, so to help you out, I’ve compiled this detailed guide to sales planning — including expert-backed insight and examples — that will ensure your next sales plan is fundamentally sound and effective"
              </p>
            </div>
          </div>
          <div className='flex flex-row justify-start items-center gap-3 mt-3'>
            <p className='font-semibold'>Topic:</p>
            <p className='border-[1px] border-white bg-neutral-300 rounded-lg px-2 py-1 hover:bg-white hover:shadow-sm hover:border-black hover:border-[1px] cursor-pointer'>#Nail</p>
            <p className='border-[1px] border-white bg-neutral-300 rounded-lg px-2 py-1 hover:bg-white hover:shadow-sm hover:border-black hover:border-[1px] cursor-pointer'>#Nail</p>
          </div>
        </div>
        <hr className='my-5 shadow-sm'/>
        <div className='flex flex-col items-center justify-center gap-3 my-5'>
          <p className='text-xl font-semibold'>"Don't forget to share this post!</p>
          <div className='flex flex-row items-center justify-center gap-3 cursor-pointer'>
          <Facebook  className='hover:text-primary'/>
          <Instagram  className='hover:text-primary'/>
          <Twitter  className='hover:text-primary'/>
          </div>
        </div>

        {/* The posts in same topic */}
        <Blog />
      </Container>

      <Footer />
    </>
  )

}