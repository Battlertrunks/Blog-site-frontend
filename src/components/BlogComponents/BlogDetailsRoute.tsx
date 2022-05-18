import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Article from "../../models/Article";
import { getBlogDetails } from "../../services/blogSiteServices";
import "./BlogDetailsRoute.css";

const BlogDetailsRoute = () => {
  const id: string | undefined = useParams().id;
  const [information, setInformation] = useState<Article>();
  // let information: Article;

  useEffect(() => {
    if (id) {
      getBlogDetails(id).then((response) => setInformation(response));
    }
  }, [id]);

  const htmlBody: string = information?.bodyText!;

  console.log(information?.userId);

  return (
    <section className="BlogDetailsRoute">
      <div className="title-and-date-container">
        <h2>{information?.title}</h2>
        <p>- {information?.date}</p>
      </div>
      <div className="link-container">
        <Link
          className="user-link"
          to={`/user/${encodeURIComponent(information?.userId!)}`}
        >
          <p>by {information?.wroteBy}</p>
        </Link>
      </div>
      <img src={information?.image} alt={information?.img_alt} />
      <div
        className="body-text"
        dangerouslySetInnerHTML={{ __html: htmlBody }}
      />
    </section>
  );
};

export default BlogDetailsRoute;
