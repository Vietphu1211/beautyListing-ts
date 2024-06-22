import { CMS_NAME, CMS_URL } from "../_lib/constants";

export default function Intro() {
  return (
    <section className="flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-primary">
        <span className="text-secondary">Beautylisting</span> Blog.
      </h1>
      <div className="text-left mt-5">
        <p className="text-left font-semibold">
        Cập nhật những bài viết mới nhất về các chủ đề chăm sóc sức khỏe và làm đẹp tại beautylisting tại đây
          </p>
      </div>
    </section>
  );
}
