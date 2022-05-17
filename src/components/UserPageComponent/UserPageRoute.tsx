import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import ContainerBlogsRoute from "../ContainerBlogsRoute";
import "./UserPageRoute.css";

const UserPageRoute = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="UserPageRoute">
      <ContainerBlogsRoute getUser={user} />
    </section>
  );
};

export default UserPageRoute;
