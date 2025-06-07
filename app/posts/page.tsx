import PostCard from "@/components/PostCard";

export interface PostInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const loadPosts = async (): Promise<PostInterface[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default async function PostsPage() {
  const posts = await loadPosts();

  return (
    <div>
      <h1>post</h1>

      <section>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
      </section>
    </div>
  );
}
