import { Link } from "react-router-dom";
import BlogCard from "../../models/Article";

import "./BlogCardContainer.css";

interface Props {
  singleCard: BlogCard;
}

const BlogCardContainer = ({ singleCard }: Props) => {
  return (
    <li className="BlogCardContainer">
      <img src={singleCard?.image} alt={singleCard.img_alt} />
      <Link className="link-to-article" to={`/article/${singleCard._id}`}>
        <h2>{singleCard?.title}</h2>
      </Link>
      <div className="divider" />
      <p>{singleCard?.shortDescription}</p>
      <p className="date">- {singleCard?.date}</p>
    </li>
  );
};

export default BlogCardContainer;
