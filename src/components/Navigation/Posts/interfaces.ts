export type Author = {
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

export type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: { fields: { file: { url: string } } };
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};
