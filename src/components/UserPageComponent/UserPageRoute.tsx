import ContainerBlogsRoute from "../ContainerBlogsRoute";
import "./UserPageRoute.css";

const UserPageRoute = () => {
  return (
    <section className="UserPageRoute">
      <ContainerBlogsRoute getUser={true} />
    </section>
  );
};

export default UserPageRoute;
