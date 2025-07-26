import React, { useState } from "react";
import API from "../api";
function BlogForm({ onPostCreated }) {
  const [form, setForm] = useState({
    title: "",
    content: "",
    username: "",
    tags: "",
  });
  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    const tagsArray = form.tags.split(",").map((tag) => tag.trim());

    try {
      const res = await API.post("/posts", {
        ...form,
        tags: tagsArray,
      });
      onPostCreated(res.data);
      setForm({ title: "", content: "", username: "", tags: "" });
    } catch (error) {
      console.error("Error : ", error);
    }
  };
  return (
    <>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handelChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handelChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Author"
          value={form.username}
          onChange={handelChange}
          required
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags"
          value={form.tags}
          onChange={handelChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default BlogForm;
