'use client'

import Container from "../Container"
import Heading from "../Heading"
import BlogPostCard from "./BlogPostCard"
import PostCardSkeleton from "../skeleton/PostCardSkeleton"
import { useCallback, useEffect, useRef, useState } from "react"
// import SlidingHandleButton from "../SlidingHandleButton"
import getBlogPostItem from "@/app/_data/getBlogPostItem"
import { useRouter } from "next/navigation"
import SlidingHandleButton from "../SlidingHandleButton"

const Blog = () => {
  const getblogPost = getBlogPostItem;

  const listRef = useRef(null);
  const scrollLeftHandle = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: -300,
        behavior: "smooth"
      })
    }
  }
  const scrollRightHandle = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 300,
        behavior: "smooth"
      })
    }
  }

 
  const router = useRouter();
    const goToPost = (slug) => {
        router.push(`/${slug}`)
        console.log(`check${slug}`)

    }


  // giả lập thời gian chờ phản hồi từ máy chủ 2s thay vì fetch data từ đây
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(() => {
    setIsLoading(false)
  }, 300);


  return (
    <Container>
      <Heading
        title="News and Blog"
        subtitle="Read all blogposts from here"
      />
      {/* <button onClick={handleCheck}>Check button</button> */}
      <div ref={listRef} className="flex flex-row justify-start items-center gap-2 overflow-x-auto  md:overflow-hidden md:py-5">
        {getblogPost && getblogPost.map((blogItem) => (
          <>
            {isLoading ? (
              <PostCardSkeleton />
            ) : (
              <div>
                <BlogPostCard
                  id={blogItem.id}
                  title={blogItem.title}
                  subtitle={blogItem.subtitle}
                  bodyText={blogItem.bodyText}
                  img={blogItem.img}
                  authorName={blogItem.authorName}
                  authorAvatar={blogItem.authorAvatar}
                  publishedDate={blogItem.publishedDate}
                  category={blogItem.category}
                  slug={blogItem.slug}
                  onClick={goToPost}
                />


              </div>
            )}
          </>
        ))}
      </div>
      <SlidingHandleButton
      scrollLeftHandle={scrollLeftHandle}
      scrollRightHandle={scrollRightHandle}
       />
    </Container>
  )
}

export default Blog