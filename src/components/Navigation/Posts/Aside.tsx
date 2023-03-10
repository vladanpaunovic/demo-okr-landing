import { getAllPosts } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

type Props = {
  currentPostSlug: string;
  allPosts: Awaited<ReturnType<typeof getAllPosts>>;
};

const Aside = (props: Props) => {
  const filteredPosts = props.allPosts.filter(
    (post) => post.slug !== props.currentPostSlug
  );

  return (
    <aside>
      <div>
        <div className="mb-8">
          <h4 className="font-semibold uppercase mb-4">1ovMany News</h4>
          <p className="text-gray-600 text-sm mb-4">
            Be the first to get all the stories you need-to-know from 1ofMany to
            your inbox
          </p>
          <button
            type="button"
            className="rounded-md bg-slate-900 p-2 text-white w-full"
          >
            Subscribe
          </button>
        </div>
        {filteredPosts.length > 0 && (
          <div>
            <h4 className="font-semibold uppercase mb-4">Other Posts</h4>
            <div>
              {filteredPosts.map((post) => (
                <div key={post.slug} className="mb-8">
                  <div className="flex">
                    <div className="w-9/12 pr-3">
                      <h5 className="font-semibold mb-2">{post.title}</h5>
                    </div>
                    <Link
                      href={`/what-we-think/${post.slug}`}
                      className="w-3/12"
                    >
                      <Image
                        width={140}
                        height={140}
                        src={post.coverImage}
                        alt={post.title}
                        className="rounded-xl"
                        placeholder="blur"
                        blurDataURL={post.blurDataURL}
                      />
                    </Link>
                  </div>
                  <div>
                    <p className="mb-2">{post.excerpt.substring(0, 100)}</p>
                    <Link
                      href={`/what-we-think/${post.slug}`}
                      className="underline"
                    >
                      Read in 9 minutes
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Aside;
