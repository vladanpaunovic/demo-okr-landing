import {
  AuthorContentful,
  PostType,
} from "@/components/Navigation/Posts/interfaces";
import * as contentful from "@/lib/contentful";
import { previewData } from "next/headers";
import { notFound, useSearchParams } from "next/navigation";

export default async function Head({ params }: { params: { slug: string } }) {
  const isPreview = previewData();
  const client = !!isPreview ? contentful.previewClient : contentful.client;

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
