import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import Container from '../Container'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  const footerItem = [
    {
      title: "About",
      slug: "about"
    },
    {
      title: "Services",
      slug: "services"
    },
    {
      title: "Projects",
      slug: "Meet the team"
    },
    {
      title: "Contact Us",
      slug: "about"
    },
  ]
  return (
    <>
      <hr />
      <section className='bg-primary text-white dark:text-dark'>

        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-10 py-3 my-5'>
            <div className='flex flex-col gap-5 col-span-2 justify-center items-center md:items-start'>
              <Link href="/">
                <Image
                  src='./logo.svg'
                  alt='logo'
                  width={80}
                  height={50}
                  className='shadow-md'
                />
              </Link>
              <h3 className='text-xl font-semibold text-center'>About</h3>
              <p className='text-base dark:text-neutral-500 text-center text-white'>write something here to introduce about your company</p>
              <div className='flex flex-row gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a78.831 78.831 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465a72.11 72.11 0 0 1-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78.43 78.43 0 0 1-2.189-.023l-.194-.006a63.036 63.036 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.889 4.889 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428a74.1 74.1 0 0 1-.03-.712l-.005-.194A79.047 79.047 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.678a4.897 4.897 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="21.88px" height="25px" viewBox="0 0 448 512"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 128 128"><path fill="currentColor" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3M39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1 1 10.49-10.5a10.5 10.5 0 0 1-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path></svg>
              </div>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" className="focus-within:text-sm" />
                <Button type="submit" className="bg-black border-0 " variant="outline">Subscribe</Button>
              </div>
            </div>

            <div className='col-span-4 md:col-span-1 mt-3 text-center md:text-left '>
              <h3 className='text-xl font-semibold'>Usefull Links</h3>

              {footerItem && footerItem.map((item, index) => (
                <Link key={index} href={item.slug}>
                  <p className='text-base dark:text-neutral-500 text-white'>{item.title}</p>
                </Link>
              ))}
            </div>
            <div className='flex flex-col md:items-start gap-1 col-span-4 md:col-span-1 mt-3 text-center md:text-left'>
              <h3 className='text-xl font-semibold'>Contact</h3>
              <div className='flex flex-row gap-1 justify-center items-start '>
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5"></path></svg>
                <p className='dark:text-neutral-500 text-white'>75 Road Lsated Street,600</p>
              </div>
              <div className='flex flex-row justify-center items-start gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 28 28"><path fill="currentColor" d="M2.004 7.75A3.75 3.75 0 0 1 5.754 4H22.25A3.75 3.75 0 0 1 26 7.75v.01l-12 6.147L2.004 7.764zm0 1.699v9.801A3.75 3.75 0 0 0 5.754 23H22.25A3.75 3.75 0 0 0 26 19.25V9.446l-11.658 5.972a.75.75 0 0 1-.684 0z"></path></svg>
                <p className='dark:text-neutral-500 text-white'>example@gmail.com</p>
              </div>
              <div className='flex flex-row justify-center items-start gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 32 32"><path fill="currentColor" d="M10.25 2A3.25 3.25 0 0 0 7 5.25v21.5A3.25 3.25 0 0 0 10.25 30h11.5A3.25 3.25 0 0 0 25 26.75V5.25A3.25 3.25 0 0 0 21.75 2zM14 24h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2"></path></svg>
                <p className='dark:text-neutral-500 text-white'>0905279544</p>
              </div>
            </div>
          </div>
        </Container>
        <hr />
        <div className='flex justify-center items-center py-5 '>
          <span className=' dark:text-black text-white '>Copyright@LemDev</span>
        </div>
      </section>

    </>
  )
}

export default Footer