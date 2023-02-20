import { createClient } from "contentful";

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "yg9i1pclvzox",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default client;
