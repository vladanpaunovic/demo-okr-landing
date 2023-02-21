import { AuthorMd, PostType } from "@/components/Navigation/Posts/interfaces";
import PostHeader from "@/components/Navigation/Posts/PostHeader";
import PostBody from "@/components/Navigation/Posts/PostBody";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import markdownToHtml from "@/lib/markdownToHTML";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function Post({ params: { slug } }: Props) {
  const post: PostType<AuthorMd> = getPostBySlug(slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "coverImage",
  ]) as any;

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <div>
      <div>
        <>
          <article className="mb-32 pt-8">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              type="md"
            />
            <PostBody content={content} />
          </article>
        </>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
