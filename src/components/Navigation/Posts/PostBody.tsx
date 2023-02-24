import markdownStyles from "./markdown-styles.module.css";
import Aside from "./Aside";
import { getAllPosts } from "@/lib/posts";

type Props = {
  content: string;
  slug: string;
  allPosts: Awaited<ReturnType<typeof getAllPosts>>;
};

const PostBody = ({ content, slug, allPosts }: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex pb-8 pl-12 pr-12 mr-8 rounded-3xl bg-slate-50">
        <div className="max-w-3xl prose lg:prose-xl">
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <div className="relative">
          <div className="h-screen sticky top-0 pt-12 pl-12">
            <Aside allPosts={allPosts} currentPostSlug={slug} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBody;
