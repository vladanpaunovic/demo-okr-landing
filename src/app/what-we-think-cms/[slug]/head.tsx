import {
  AuthorContentful,
  PostType,
} from "@/components/Navigation/Posts/interfaces";
import client from "@/lib/contentful";
import { notFound } from "next/navigation";

export default async function Head({ params }: { params: { slug: string } }) {
  const posts = await client.getEntries<PostType<AuthorContentful>>({
    content_type: "post",
    "fields.slug[in]": params.slug,
  });

  if (!posts.items.length) {
    return notFound();
  }

  const post = posts.items[0].fields;

  const title = post.title;
  return (
    <>
      <title>{title}</title>
      <meta
        property="og:image"
        content={`https:${post.coverImage.fields.file.url}`}
      />
    </>
  );
}
