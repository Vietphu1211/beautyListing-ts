import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Categories from "./categories";
import Container from "@/app/_components/Container";
import BreadcrumForBlog from "./breadcrumForBlog";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <Container>
      <BreadcrumForBlog />
      <PostTitle>
        {title}
      </PostTitle>
      <div className="flex flex-col  items-start justify-between">
        <div className="">
          <Avatar author={author} />
        </div>
        <div className="flex flex-col md:flex-row gap-3">
         <div className="flex flex-row gap-3 items-center">
         <p>
          Cập nhật:  
          </p>
            <Date dateString={date} />
         </div>
          <Categories categories={categories} />
        </div>
      </div>
      <div className="flex justify-center">
      <div className=" w-12/12 md:w-8/12 mx-auto mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
      </div>
    </Container>
  );
}
