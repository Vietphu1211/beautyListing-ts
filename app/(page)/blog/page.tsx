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




export default function BlogHubPage() {

    
    const router = useRouter();
    const goToPost = (slug) => {
        router.push(`/${slug}`);
        router.replace('/blog');/**dùng router.replace('slug_hien_tai) để tránh lỗi 404 not found */
        // console.log(router)
    }

    const blogPostList = blogPostItem;

    // sử dụng useState và setTimeOut tạo để trễ để loading lazy icon và giả lập thời gian fetch dữ liệu từ backend
    const [isLoading, setIsLoading] = useState(true)
    setTimeout(() => {
        setIsLoading(false)
    }, 1000)

    function handlePageChange(newPage){
        console.log('new page:', newPage)
    }

    return (
        <>
            {
                isLoading ?
                    (
                        <Loading />
                    )
                    :
                    (
                        <>
                            <Header />
                            <Container>
                                <div className='flex flex-col justify-center items-center'>
                                    <BreadcrumbCollapsed />
                                    <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-24 mx-auto'>
                                        {
                                            blogPostList && blogPostList.map((blogPostItem, index) => (
                                                <BlogPostCard
                                                    key={index}
                                                    title={blogPostItem.title}
                                                    bodyText={blogPostItem.bodyText}
                                                    img={blogPostItem.img}
                                                    category={blogPostItem.category}
                                                    authorAvatar={blogPostItem.authorAvatar}
                                                    authorName={blogPostItem.authorName}
                                                    publishedDate={blogPostItem.publishedDate}
                                                    slug={blogPostItem.slug}
                                                    onClick={goToPost}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>

                                <PaginationComponent 
                                   
                                />
                            </Container>
                            <Footer />
                        </>
                    )
            }
        </>


    )
}

