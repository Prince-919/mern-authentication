import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#212529]">
      <div className="flex justify-between p-4 items-center max-w-6xl mx-auto">
        <Link to="/">
          <h1 className="font-semibold text-xl text-[#f8f9fa]">
            Authentication
          </h1>
        </Link>
        <ul className="flex gap-5 text-[#f8f9fa] font-semibold">
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
