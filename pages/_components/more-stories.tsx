import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Các bài viết khác
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-8 lg:gap-x-10 gap-y-20 md:gap-y-10 mb-32">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            // excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
