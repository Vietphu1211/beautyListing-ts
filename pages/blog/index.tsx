'use client'
import Loading from '@/app/Loading'
import Blog from '@/app/_components/Blog/Blog'
import BlogPostCard from '@/app/_components/Blog/BlogPostCard'
import { BreadcrumbCollapsed } from '@/app/_components/BreadcrumbCollapsed'
import Container from '@/app/_components/Container'
import { PaginationComponent } from '@/app/_components/pagination/Pagination'
import Footer from '@/app/_components/footer/Footer'
import Header from '@/app/_components/header/Header'
import blogPostItem from '@/app/_data/getBlogPostItem'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { GetStaticProps } from 'next'
import { getAllPostForHome } from '../_lib/api'




export default function BlogHubPage({ allPost: {edges}, preview }) {
  
    const blogPostItem = edges;
    const morePosts = edges.slice(1);


    return (
        <>
            <Container>
                <div className='flex flex-col justify-center items-center'>
                    <BreadcrumbCollapsed />
                    <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-24 mx-auto'>
                        {
                            blogPostItem?.map((blogPostItem)=>(
                                <BlogPostCard
                                key={blogPostItem?.node?.id}
                                    title={blogPostItem?.title}
                                    sourceUrl={blogPostItem?.node?.featuredImage?.node?.sourceUrl}
                                    category={blogPostItem?.node?.category}
                                    authorAvatar={blogPostItem?.node?.author?.node?.avatar?.url}
                                    authorName={blogPostItem?.node?.author?.node?.name}
                                    publishedDate={blogPostItem?.node?.date}
                                    slug={blogPostItem?.node?.slug}
                                    description={blogPostItem?.node?.excerpt}
                                />
                            ))  
                                
                            
                        }
                        
                    </div>
                </div>

                <PaginationComponent

                />
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const allPost = await getAllPostForHome(preview);
    return {
        props: { allPost },
        revalidate: 10,
    }
}
