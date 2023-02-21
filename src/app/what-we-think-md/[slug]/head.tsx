import { PostType, AuthorMd } from "@/components/Navigation/Posts/interfaces";
import { getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";

export default async function Head({ params }: { params: { slug: string } }) {
  const post: PostType<AuthorMd> = getPostBySlug(params.slug, [
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

  const title = post.title;

  return (
    <>
      <title>{title}</title>
      <meta property="og:image" content={post.coverImage} />
    </>
  );
}
