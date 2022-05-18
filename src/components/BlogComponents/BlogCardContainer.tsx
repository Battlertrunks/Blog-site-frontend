import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import BlogCard from "../../models/Article";
import { deleteBlog } from "../../services/blogSiteServices";

import "./BlogCardContainer.css";

interface Props {
  singleCard: BlogCard;
  reloadCards: () => void;
}

const BlogCardContainer = ({ singleCard, reloadCards }: Props) => {
  const { user } = useContext(AuthContext);

  const deletePost = async (): Promise<void> => {
    await deleteBlog(singleCard?._id!);
    reloadCards();
  };

  return (
    <li className="BlogCardContainer">
      <img src={singleCard?.image} alt={singleCard.img_alt} />
      <Link
        className="link-to-article"
        to={`/article/${encodeURIComponent(singleCard._id!)}`}
      >
        <h2>{singleCard?.title}</h2>
      </Link>
      <div className="divider" />
      <p>{singleCard?.shortDescription}</p>
      <ul>
        <li>
          <Link
            className="user-link"
            to={`/user/${encodeURIComponent(singleCard.userId)}`}
          >
            <p>By {singleCard.wroteBy}</p>
          </Link>
        </li>
        <li>
          <p className="date">- {singleCard?.date}</p>
        </li>
      </ul>

      {user && user.uid === singleCard.userId && (
        <button onClick={() => deletePost()}>Delete</button>
      )}
    </li>
  );
};

export default BlogCardContainer;
