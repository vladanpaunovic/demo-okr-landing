export type AuthorContentful = {
  fields: {
    name: string;
    picture: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
};

export type Author = AuthorContentful;

export type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: { fields: { file: { url: string } } };
  author: AuthorContentful;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};
