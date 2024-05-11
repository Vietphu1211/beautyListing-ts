'use client'
import Listings from "./_components/listings/Listings";
import SearchPlace from "./_components/search/SearchPlace";
import Blog from "./_components/Blog/Blog";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";
import CategoryModal from "./_components/modals/CategoryModal";
import Feelback from "./_components/feelback/Feelback";
import CategoryList from "./_components/category/CategoryList";



export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
    setTimeout(() => {
        setIsLoading(true)
    },1000)
  return (
   <>
    {
isLoading ? (
  <>
      <CategoryModal />
      <section className='my-3 absolute  w-full mx-auto z-20'>
      <Header />
      </section>
      <SearchPlace />
      {/* <Category /> */}
      {/* <CategoryList /> */}
      <Listings />
      <Blog />
      <Feelback />
      <Footer />
    </>
) : (
  <Loading />
)
   }
   </>
   
  );
}
