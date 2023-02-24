import Link from "next/link";
import Image from "next/image";
import cb from "classnames";

type Props = {
  title: string;
  src: string;
  slug?: string;
  blurDataURL: string;
};

const CoverImage = ({ title, src, slug, blurDataURL }: Props) => {
  const image = (
    <Image
      src={src}
      blurDataURL={blurDataURL}
      alt={`Cover Image for ${title}`}
      width={896}
      height={600}
      className={cb("shadow-small", {
        "rounded-t-lg": slug,
        "rounded-2xl shadow-2xl": !slug,
      })}
      placeholder="blur"
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/what-we-think/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        <div className="mb-8">{image}</div>
      )}
    </div>
  );
};

export default CoverImage;
