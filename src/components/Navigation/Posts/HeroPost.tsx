import Avatar from "./Avatar";
import CoverImage from "./CoverImage";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: { name: string; picture: string };
  slug: string;
  blurDataURL: string;
};

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  blurDataURL,
}: Props) => {
  return (
    <section className="border rounded-xl shadow-lg">
      <div className="">
        <CoverImage
          blurDataURL={blurDataURL}
          title={title}
          src={coverImage}
          slug={slug}
        />
      </div>
      <div className="p-4">
        <div>
          <h3 className="text-4xl lg:text-lg leading-tight mb-2">
            <Link
              href={`/what-we-think/${slug}`}
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
