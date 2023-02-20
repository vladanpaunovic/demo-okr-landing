export type AuthorMd = {
  name: string;
  picture: string;
};

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

export type Author = AuthorMd;

export type PostType<T = Author> = {
  slug: string;
  title: string;
  date: string;
  coverImage: T extends AuthorMd
    ? string
    : { fields: { file: { url: string } } };
  author: T extends AuthorMd ? AuthorMd : AuthorContentful;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};
