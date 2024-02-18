import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className=" min-h-screen">
      <div className="p-3 max-w-md mx-auto ">
        <h1 className="text-center font-semibold text-3xl my-5">Sign Up</h1>
        <div className="_shadow p-10">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="bg-slate-100 p-3 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="bg-slate-100 p-3 rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="bg-slate-100 p-3 rounded-lg"
            />
            <button className="_btn p-3 rounded-lg bg-[#0496ff] font-semibold text-white hover:opacity-95 disabled:opacity-80">
              Sign Up
            </button>
          </form>
          <div className="flex gap-2 mt-5">
            <p>Already have an account? </p>
            <Link to="/sign-in">
              <span className="text-[#0496ff]">Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
