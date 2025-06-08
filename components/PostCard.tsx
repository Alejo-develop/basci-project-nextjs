"use client";

import { PostInterface } from "@/app/posts/page";
import Link from "next/link";

export const PostCard = (post: PostInterface) => {
  return (
    <div>
      <h3>
        {post.id}.{post.title}
      </h3>
      <p>{post.body}</p>

      <Link href={`/posts/${post.id}`}>
        <button>Click</button>
      </Link>
    </div>
  );
};

export default PostCard;
