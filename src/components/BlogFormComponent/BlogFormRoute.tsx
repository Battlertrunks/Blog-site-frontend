import { FormEvent, useState } from "react";
import "./BlogFormRoute.css";

const BlogFormRoute = () => {
  const [title, setTitle] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setTitle("");
    setPicture("");
    setBody("");
  };

  return (
    <form className="BlogFormRoute" onSubmit={submitHandler}>
      <h3>Creating a Post</h3>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="opening-img">Opening Picture</label>
      <input
        type="file"
        name="opening-img"
        id="opening-img"
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
        required
      />
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        id="content"
        placeholder="Type content here..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default BlogFormRoute;
