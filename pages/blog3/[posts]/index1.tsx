'use client'
import { BreadcrumbCollapsed } from '@/app/_components/BreadcrumbCollapsed'
import Container from '@/app/_components/Container'
import Heading from '@/app/_components/Heading'
import Footer from '@/app/_components/footer/Footer'
import Header from '@/app/_components/header/Header'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPostsWithSlug, getPostAndMorePosts, getPostDemo } from '../../_lib/api'
import Error from 'next/error'
import PostTitle from '../../_components/post-title'
import MoreStories from '../../_components/more-stories'
import Head from 'next/head'
import Layout from '../../_components/layout'




export default function Post({post}) {
  const router = useRouter()
  // const morePosts =  posts?.edges;

  // if (!router.isFallback && !post?.slug) {
  //   console.log('xinchao')

  //   return <Error statusCode={404} />;
  // }
  return (

<>
    <Header />
    {
      router.isFallback ? (
        <PostTitle>Loading...</PostTitle>
      )
      : (
        <>
        <article>
        {/* <div className='my-3 bg-neutral-900  w-full mx-auto z-20'>
      <Header />
      </div> */}
      <Head>
      
        <title>
          {post?.title}
        </title>
        <meta
        property='og:image'
        content={post.featuredImage?.node.sourceUrl}
        />
      </Head>
        <Container>
          <BreadcrumbCollapsed />
          <div className='w-full md:w-[80%] lg:w-[60%] mx-auto px-1'>
          {/* heading of post */}
            <div>
              <h2 className='font-semibold text-xl'>
                {post?.title}
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
                <p>Sales planning is a fundamental component of sound selling. After all, you c have, well, structure. Everyone — from the top to the bottom of a sales org — benefits from having solid, actionable, thoughtfully organized sales plans in place.</p>
                <Image
                  src="https://images.unsplash.com/photo-1713341087485-a8cf83fdeafb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
                  alt="text"
                  width={500}
                  height={200} />
                <p>
                  his kind of planning offers clarity and direction for your sales team — covering everything from the prospects y trying to reach to the goals ye trying to hit to the insightrying to deliver on.But putting together one of these plans lways straightforward, so to help you out compiled this detailed guide to sales planning — including expert-backed insight and examples — that will ensure your next sales plan is fundamentally sound and
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
            <p className='text-xl font-semibold'>Dorget to share this post!</p>
            <div className='flex flex-row items-center justify-center gap-3 cursor-pointer'>
            <Facebook  className='hover:text-primary'/>
            <Instagram  className='hover:text-primary'/>
            <Twitter  className='hover:text-primary'/>
            </div>
          </div>
  
          {/* The posts in same topic */}
        </Container>
  
        <Footer />
      </article>
        {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </>   
      )
    }
    </>

  )
}

// export const getStaticProps:GetStaticProps = async({
// params,
// preview=false,
// previewData,
// })=> {
//   const data = await getPostAndMorePosts(params?.slug, preview, previewData);
//   return {
//     props: {
//       preview,
//       post: data?.post,
//       posts: data?.posts
//     },
//     revalidate: 10,
//   };
// };


export const getStaticProps:GetStaticProps = async({
  params
  }: {params: {slug: string}})=> {
    console.log("params.slug:", params?.slug); 
    const data = await getPostDemo(params.slug);
    
    return {
      props: {
        post: data?.post,
      },
      revalidate: 10,
    };
  };


export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
    fallback: true,
  };
};


