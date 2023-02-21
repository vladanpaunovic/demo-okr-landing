import { createClient } from "contentful";

export const client = createClient({
  space: "yg9i1pclvzox",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const previewClient = createClient({
  space: "yg9i1pclvzox",
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: "preview.contentful.com",
});
