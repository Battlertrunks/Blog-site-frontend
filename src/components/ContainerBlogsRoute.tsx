import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogCard from "../models/Article";
import { getBlogCards, getBlogsByUid } from "../services/blogSiteServices";
import BlogCardContainer from "./BlogComponents/BlogCardContainer";
import "./ContainerBlogsRoute.css";

interface Props {
  getUser?: boolean;
}

const ContainerBlogsRoute = ({ getUser = false }: Props) => {
  const [blogs, setBlogs] = useState<BlogCard[]>([]);

  const uid: string | undefined = useParams().uid;

  useEffect(() => {
    resetList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetList = (): void => {
    if (!getUser) {
      getBlogCards().then((response) => {
        setBlogs(response);
      });
    } else {
      getBlogsByUid(uid!).then((response) => {
        setBlogs(response);
      });
    }
  };

  return (
    <section className="ContainerBlogsRoute">
      <h2 className="title">
        {!getUser ? "Recent Posts" : `${blogs[0]?.wroteBy}'s Blogs`}
      </h2>
      <div className="blog-cards-container">
        <ul className="blog-cards">
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
