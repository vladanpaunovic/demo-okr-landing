import {
  AuthorContentful,
  PostType,
} from "@/components/Navigation/Posts/interfaces";
import Head from "next/head";
import { notFound } from "next/navigation";
import PostHeader from "@/components/Navigation/Posts/PostHeader";
import PostBody from "@/components/Navigation/Posts/PostBody";
import markdownToHtml from "@/lib/markdownToHTML";
import client from "@/lib/contentful";

type Props = {
  params: { slug: string };
};

export default async function Post({ params: { slug } }: Props) {
  const posts = await client.getEntries<PostType<AuthorContentful>>({
    content_type: "post",
    "fields.slug[in]": slug,
  });

  if (!posts.items.length) {
    return notFound();
  }

  const post = posts.items[0].fields;

  const content = await markdownToHtml(post.content || "");

  const title = `${post.title} | Next.js Blog Example with Markdown`;
  return (
    <div>
      <div>
        <>
          <article className="mb-32 pt-8">
            <Head>
              <title>{title}</title>
              <meta
                property="og:image"
                content={`https:${post.coverImage.fields.file.url}`}
              />
            </Head>
            <PostHeader
              type="cms"
              title={post.title}
              coverImage={`https:${post.coverImage.fields.file.url}`}
              date={post.date}
              author={{
                name: post.author.fields.name,
                picture: `https:${post.author.fields.picture.fields.file.url}`,
              }}
            />
            <PostBody content={content} />
          </article>
        </>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await client.getEntries<PostType>({
    content_type: "post",
  });

  return posts.items.map((post) => ({
    slug: post.fields.slug,
  }));
}
