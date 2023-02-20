import HeroPost from "@/components/Navigation/Posts/HeroPost";
import {
  AuthorContentful,
  PostType,
} from "@/components/Navigation/Posts/interfaces";
import client from "@/lib/contentful";

export default async function Home() {
  const posts = await client.getEntries<PostType<AuthorContentful>>({
    content_type: "post",
  });

  const allPosts = posts.items;

  return (
    <main>
      <div className="p-8 container mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold">What We Think?</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {allPosts.map((post) => {
            return (
              <HeroPost
                key={post.fields.slug}
                author={{
                  name: post.fields.author.fields.name,
                  picture: `https:${post.fields.author.fields.picture.fields.file.url}`,
                }}
                coverImage={`https:${post.fields.coverImage.fields.file.url}`}
                date={post.fields.date}
                excerpt={post.fields.excerpt}
                slug={post.fields.slug}
                title={post.fields.title}
                type="cms"
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
