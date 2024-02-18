import { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput";
import ButtonLoading from "../components/ButtonLoading";
import Button from "../components/Button";
import TextAuthBottom from "../components/TextAuthBottom";

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
            <TextInput
              type="text"
              placeholder="Username"
              id="username"
              handleChange={handleChange}
            />
            <TextInput
              type="email"
              placeholder="Email"
              id="email"
              handleChange={handleChange}
            />
            <TextInput
              type="password"
              placeholder="Password"
              id="password"
              handleChange={handleChange}
            />
            <Button title={loading ? <ButtonLoading /> : "Sign Up"} />
          </form>
          <TextAuthBottom text="Already have an account?" linkText="Sign In" />
          <p className="my-2 text-red-500 ">
            {error && "Something went wrong!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
