import HeroPost from "@/components/Navigation/Posts/HeroPost";
import { AuthorMd, PostType } from "@/components/Navigation/Posts/interfaces";
import { getAllPosts } from "@/lib/blog";

export default async function Home() {
  const allPosts: Pick<
    PostType<AuthorMd>,
    "title" | "date" | "slug" | "author" | "coverImage" | "excerpt"
  >[] = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]) as any;

  return (
    <main>
      <div className="p-8 container mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold">What We Think?</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {allPosts.map((post) => (
            <HeroPost
              key={post.slug}
              author={post.author}
              coverImage={post.coverImage}
              date={post.date}
              excerpt={post.excerpt}
              slug={post.slug}
              title={post.title}
              type="md"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
