import Avatar from "./Avatar";
import CoverImage from "./CoverImage";
import PostTitle from "./PostTitle";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: { name: string; picture: string };
  blurDataURL: string;
};

const PostHeader = ({
  title,
  coverImage,
  date,
  author,
  blurDataURL,
}: Props) => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="w-1/2">
          <div className="mb-6">
            <Avatar date={date} name={author.name} picture={author.picture} />
          </div>
          <PostTitle>{title}</PostTitle>
        </div>
        <div className="w-1/2 p-8">
          <CoverImage
            blurDataURL={blurDataURL}
            title={title}
            src={coverImage}
          />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
