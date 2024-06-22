import Link from "next/link";
import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";

export default function PostPreview({
  title,
  coverImage,
  date,
  // excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <h3 className="md:text-xl mb-3 leading-snug text-primary text-md font-medium">
        <Link
          href={`/blog/${slug}`}
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h3>
      <div className="text-lg mb-4 flex flex-row items-center justify-between">
      <Avatar author={author} />
        <Date dateString={date} />

      </div>
      {/* <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      /> */}
    </div>
  );
}
