import Avatar from "./Avatar";
import DateFormatter from "./DateFormatter";
import CoverImage from "./CoverImage";
import Link from "next/link";
import type { Author } from "./interfaces";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section className="border rounded-xl shadow-lg">
      <div className="">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="p-4">
        <div>
          <h3 className="text-4xl lg:text-lg leading-tight mb-2">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline font-medium"
            >
              {title}
            </Link>
          </h3>
        </div>
        <div>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            {excerpt}
          </p>
          <Avatar date={date} name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
