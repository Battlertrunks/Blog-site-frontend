import { useEffect, useState } from "react";
import BlogCard from "../models/Article";
import { getBlogCards } from "../services/blogSiteServices";
import BlogCardContainer from "./BlogComponents/BlogCardContainer";
import classes from "./ContainerBlogsRoute.module.css";

const ContainerBlogsRoute = () => {
  const [blogs, setBlogs] = useState<BlogCard[]>([]);

  useEffect(() => {
    resetList();
  }, []);

  const resetList = (): void => {
    getBlogCards().then((response) => setBlogs(response));
  };

  return (
    <section className={classes.ContainerBlogsRoute}>
      <h2 className={classes.title}>Recent Posts</h2>
      <div className={classes["column-layout"]}>
        <ul>
          {blogs.map((item) => (
            <BlogCardContainer
              reloadCards={resetList}
              singleCard={item}
              key={item._id}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContainerBlogsRoute;
