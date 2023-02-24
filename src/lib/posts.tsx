import { PostType } from "@/components/Navigation/Posts/interfaces";
import * as contentful from "@/lib/contentful";
import { previewData } from "next/headers";
import { getPlaiceholder } from "plaiceholder";

export const getAllPosts = async () => {
  const isPreview = previewData();
  const client = !!isPreview ? contentful.previewClient : contentful.client;

  const posts = await client.getEntries<PostType>({
    content_type: "post",
  });

  const allPosts = posts.items;

  const imagePaths = allPosts.map(
    (post) => `https:${post.fields.coverImage.fields.file.url}`
  );

  const images = await Promise.all(
    imagePaths.map(async (src) => {
      const {
        base64,
        img: { width, height, ...img },
      } = await getPlaiceholder(src);

      return {
        ...img,
        blurDataURL: base64,
      };
    })
  ).then((values) => values);

  return allPosts.map((post, index) => ({
    ...post.fields,
    blurDataURL: images[index].blurDataURL,
    slug: post.fields.slug,
    coverImage: `https:${post.fields.coverImage.fields.file.url}`,
  }));
};
