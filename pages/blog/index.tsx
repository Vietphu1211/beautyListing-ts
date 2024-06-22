'use client'
import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "@/app/_components/Container";
import MoreStories from "../_components/more-stories";
import HeroPost from "../_components/hero-post";
import Intro from "../_components/intro";
import Layout from "../_components/layout";
import { getAllCategory, getAllPostsForHome } from "../_lib/api";
import { CMS_NAME } from "../_lib/constants";
import Header from "@/app/_components/header/Header";
import HeaderBlog from "../_components/Blog/HeaderBlog";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Cập nhật các bài viết mới nhất của chúng tôi</title>
      </Head>
        <section className="border-b-2 shadow-sm">
          <HeaderBlog />
        </section>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);
  // const allCategory = await getAllCategory();

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
