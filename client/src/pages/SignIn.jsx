import { useState } from "react";
import TextInput from "../components/TextInput";
import ButtonLoading from "../components/ButtonLoading";
import Button from "../components/Button";
import TextAuthBottom from "../components/TextAuthBottom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("http://localhost:8000/api/v1/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInStart());
      dispatch(signInFailure(error));
    }
  };
  return (
    <div className=" min-h-screen">
      <div className="p-3 max-w-md mx-auto ">
        <h1 className="text-center font-semibold text-3xl my-5">Sign Up</h1>
        <div className="_shadow p-10 rounded">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            <Button title={loading ? <ButtonLoading /> : "Sign In"} />
          </form>
          <TextAuthBottom
            href="/sign-up"
            text="Dont have an account?"
            linkText="Sign Up"
          />
          <p className="my-2 text-red-500 ">
            {error ? error.message || "Something went wrong!" : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
