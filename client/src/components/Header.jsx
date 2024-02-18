import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="shadow">
      <div className="flex justify-between p-4 items-center max-w-6xl mx-auto">
        <Link to="/">
          <h1 className="font-semibold text-xl ">Authentication</h1>
        </Link>
        <ul className="flex gap-5 font-semibold">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="sign-in">
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
