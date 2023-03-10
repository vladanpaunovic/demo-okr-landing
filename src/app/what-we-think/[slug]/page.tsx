import { PostType } from "@/components/Navigation/Posts/interfaces";
import { notFound } from "next/navigation";
import { previewData } from "next/headers";
import PostHeader from "@/components/Navigation/Posts/PostHeader";
import PostBody from "@/components/Navigation/Posts/PostBody";
import markdownToHtml from "@/lib/markdownToHTML";
import * as contentful from "@/lib/contentful";
import { getPlaiceholder } from "plaiceholder";
import { getAllPosts } from "@/lib/posts";

type Props = {
  params: { slug: string };
};

export default async function Post({ params: { slug } }: Props) {
  const isPreview = previewData();

  const client = !!isPreview ? contentful.previewClient : contentful.client;

  const posts = await client.getEntries<PostType>({
    content_type: "post",
    "fields.slug[in]": slug,
  });

  if (!posts.items.length) {
    return notFound();
  }

  const post = posts.items[0].fields;

  const content = await markdownToHtml(post.content || "");

  const placeholder = await getPlaiceholder(
    `https:${post.coverImage.fields.file.url}`,
    {
      size: 10,
    }
  );

  const allPosts = await getAllPosts();

  return (
    <div>
      <div>
        <>
          <article className="mb-32 pt-8">
            <PostHeader
              title={post.title}
              coverImage={`https:${post.coverImage.fields.file.url}`}
              date={post.date}
              author={{
                name: post.author.fields.name,
                picture: `https:${post.author.fields.picture.fields.file.url}`,
              }}
              blurDataURL={placeholder.base64}
            />
            <PostBody allPosts={allPosts} slug={slug} content={content} />
          </article>
        </>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const client = true ? contentful.previewClient : contentful.client;

  const posts = await client.getEntries<PostType>({
    content_type: "post",
  });

  return posts.items.map((post) => ({
    slug: post.fields.slug,
  }));
}
