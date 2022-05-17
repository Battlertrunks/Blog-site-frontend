import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import BlogCard from "../models/Article";
import { getBlogCards } from "../services/blogSiteServices";
import BlogCardContainer from "./BlogComponents/BlogCardContainer";
import "./ContainerBlogsRoute.css";

interface Props {
  getUser?: User | null;
}

const ContainerBlogsRoute = ({ getUser }: Props) => {
  const [blogs, setBlogs] = useState<BlogCard[]>([]);

  useEffect(() => {
    resetList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetList = (): void => {
    getBlogCards().then((response) => {
      console.log("runs");
      setBlogs(response);
    });
  };

  return (
    <section className="ContainerBlogsRoute">
      <h2 className="title">
        {!getUser ? "Recent Posts" : `${getUser.displayName}'s Blogs`}
      </h2>
      <div className="blog-cards-container">
        <ul className="blog-cards">
          {getUser
            ? blogs
                .filter((item) => {
                  if (item?.userId === getUser.uid) return item;
                  return null;
                })
                .map((item) => (
                  <BlogCardContainer
                    reloadCards={resetList}
                    singleCard={item}
                    key={item._id}
                  />
                ))
            : blogs.map((item) => (
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
