'use client'
import Category from "./_components/category/Category";
import Listings from "./_components/listings/Listings";
import SearchPlace from "./_components/search/SearchPlace";
import Blog from "./_components/Blog/Blog";
import Feelback from "./_components/feelback/feelback";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import PostCardSkeleton from "./_components/skeleton/PostCardSkeleton";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";
import Modal from "./_components/modals/Modal";
import CategoryModal from "./_components/modals/CategoryModal";



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
      <Header />
      <SearchPlace />
      <Category />
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
