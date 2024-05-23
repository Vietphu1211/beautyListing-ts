'use client'
import Listings from "./_components/listings/Listings";
import Blog from "./_components/Blog/Blog";
import Loading from "./Loading";
import {useEffect, useState } from "react";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";
import CategoryModal from "./_components/modals/CategoryModal";
import Feelback from "./_components/feelback/Feelback";
import Introduction from "./_components/introduction/Introduction";
import Hero from "./_components/hero/Hero";
import ClientOnly from "./_components/ClientOnly";
import { SessionProvider, signIn } from "next-auth/react"
import { Button } from "@/components/ui/button";
import { AppProps } from "next/app";



export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  setTimeout(() => {
    setIsLoading(true)
  }, 400)

  const [scrollPositionY, setScrollPositionY] = useState({top:0})
  useEffect(()=>{
    const handleScroll = ()=>{
      // write something
      const newScrollPosition = {top: window.scrollY || document.documentElement.scrollTop}
      setScrollPositionY(newScrollPosition)
      console.log('hello',newScrollPosition)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  },[])
  return (
    <ClientOnly>
      
      
            {
        isLoading ? (
          <main className="relative">
            <div className={`${scrollPositionY.top <= 50 ? 'absolute':'bg-neutral-800 sticky md:absolute py-3'} top-0 my-3 absolute   w-full mx-auto z-50`}>
              <Header />
            </div>
            <Hero />
            <Listings />
            <Introduction />
            <Blog />
            <Feelback />
            <Footer />
          </main>
        ) : (
          <Loading />
        )
      }
    
    </ClientOnly>

  );
}
