import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>this is about us page</h1>
      <Link to={"/about/profile"}>
        <button>Profile</button>
      </Link>
      <Outlet />
    </>
  );
};

export default About;
