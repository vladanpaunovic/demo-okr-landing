import Link from "next/link";
import Image from "next/image";
import cb from "classnames";

type Props = {
  title: string;
  src: string;
  slug?: string;
  type: "cms" | "md";
};

const CoverImage = ({ title, src, slug, type }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={1300}
      height={230}
      className={cb("shadow-small", {
        "rounded-t-lg": slug,
        "rounded-2xl shadow-2xl": !slug,
      })}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/what-we-think-${type}/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        <div className=" mb-8">{image}</div>
      )}
    </div>
  );
};

export default CoverImage;
