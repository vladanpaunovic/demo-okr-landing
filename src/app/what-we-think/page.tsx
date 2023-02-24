import HeroPost from "@/components/Navigation/Posts/HeroPost";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const allPosts = await getAllPosts();

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
                key={post.slug}
                author={{
                  name: post.author.fields.name,
                  picture: `https:${post.author.fields.picture.fields.file.url}`,
                }}
                coverImage={post.coverImage}
                date={post.date}
                excerpt={post.excerpt}
                slug={post.slug}
                title={post.title}
                type="cms"
                blurDataURL={post.blurDataURL}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
