import { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("http://localhost:8000/api/v1/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className=" min-h-screen">
      <div className="p-3 max-w-md mx-auto ">
        <h1 className="text-center font-semibold text-3xl my-5">Sign Up</h1>
        <div className="_shadow p-10 rounded">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="bg-slate-100 p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="bg-slate-100 p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="bg-slate-100 p-3 rounded-lg"
              onChange={handleChange}
            />
            <button
              disabled={loading}
              className="_btn p-3 rounded-lg bg-[#0496ff] uppercase font-semibold text-white hover:opacity-95 disabled:opacity-80">
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </form>
          <div className="flex gap-2 mt-5">
            <p>Already have an account? </p>
            <Link to="/sign-in">
              <span className="text-[#0496ff]">Sign In</span>
            </Link>
          </div>
          <p className="my-2 text-red-500 ">
            {error && "Something went wrong!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
