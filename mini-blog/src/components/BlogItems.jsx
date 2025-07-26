import React from "react";

function BlogItems({ post, onDelete }) {
  return (
    <>
      <div>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p>Author : {post.username}</p>
        <p>Tags : {post.tags.join(", ")}</p>
        <p>Date : {new Date(post.createdAt).toLocaleDateString()}</p>
        <button onClick={() => onDelete(post._id)}>Delete</button>
      </div>
    </>
  );
}

export default BlogItems;
