import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "@/app/_components/Container";
import PostBody from "../_components/post-body";
import MoreStories from "../_components/more-stories";
import Header from "@/app/_components/header/Header";
import PostHeader from "../_components/post-header";
import SectionSeparator from "../_components/section-separator"; 
import Layout from "../_components/layout";
import PostTitle from "../_components/post-title";
import Tags from "../_components/tags";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../_lib/api";
import { CMS_NAME } from "../_lib/constants";
import HeaderBlog from "../_components/Blog/HeaderBlog";
import Footer from "@/app/_components/footer/Footer";

export default function Post({ post, posts, preview }) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <section className="border-b-2 shadow-sm">
          <HeaderBlog />
        </section>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              
              <Head>
                <title>
                  {`${post.title} | "Content is managed by beautylisting team"`}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
      <Footer />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
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
