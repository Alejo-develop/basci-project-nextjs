import PostsPage, { PostInterface } from "../page";
import { Suspense } from "react";

type Params = {
  params: {
    id: string;
  };
};

const loadPost = async (id: string): Promise<PostInterface> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = res.json();
  return data;
};

async function ParamPage({ params }: Params) {
  const { id } = await params;
  const post = await loadPost(id);

  return (
    <div>
      <h3>
        {post.id}.{post.title}
      </h3>
      <p>{post.body}</p>

      <hr />

      <h1>Otros posts</h1>
      <Suspense
        fallback={
          <div>
            <p>Cargando otros posts.</p>
          </div>
        }
      >
        <PostsPage />
      </Suspense>
    </div>
  );
}

export default ParamPage;
