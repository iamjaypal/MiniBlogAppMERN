import React, { useEffect, useState } from "react";
import API from "../api";
import BlogItems from "./BlogItems";

function BlogList() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const fetchPosts = async () => {
    try {
      const res = await API.get(`/posts?search=${search}&page=${page}`);
      setPosts(res.data);
    } catch (error) {
      console.error("Error in fetch data", error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [search, page]);
  const handelDelete = async (id) => {
    setPosts(posts.filter((p) => p._id !== id));
    try {
      await API.delete(`/posts/${id}`);
    } catch (error) {
      console.error("Delete error ", error);
    }
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="search by title or tag"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {posts.map((post) => (
          <BlogItems key={post._id} post={post} onDelete={handelDelete} />
        ))}
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>Prev</button>
        <span>Page {page}</span>
        <button onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
    </>
  );
}

export default BlogList;
