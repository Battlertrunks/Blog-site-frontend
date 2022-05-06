import "./BlogFormRoute.css";

const BlogFormRoute = () => {
  return (
    <form className="BlogFormRoute">
      <h3>Creating a Post</h3>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="opening-img">Opening Picture</label>
      <input type="file" name="opening-img" id="opening-img" />
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        id="content"
        placeholder="Type content here..."
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default BlogFormRoute;
