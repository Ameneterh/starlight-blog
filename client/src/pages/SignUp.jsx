import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import ReactQuill from "react-quill";
import { message as msg } from "antd";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please, fill out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      msg.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-start gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Starlight
            </span>{" "}
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a blog containing all editions of Starlight Magazine. You
            can read online here or download pdf to read later at your
            convenience. You can sign up with your email and password of with
            Google Authentication.
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <div className="">
            <div className="text-sm text-center w-full bg-slate-100 dark:bg-slate-500 dark:text-slate-800 p-2 rounded-md mb-5">
              <p>
                By signing up on our platform, you agree to our{" "}
                <Link
                  to="/terms-and-conditions"
                  className="text-cyan-600 hover:underline dark:text-cyan-500 block"
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="">
                {/* <Label value="Your Full Name" /> */}
                <TextInput
                  type="text"
                  placeholder="Fullname"
                  id="fullname"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                {/* <Label value="Your username" /> */}
                <TextInput
                  type="text"
                  placeholder="Username"
                  id="username"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                {/* <Label value="Your email" /> */}
                <TextInput
                  type="email"
                  placeholder="email@company.com"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <Label value="Author Bio (if an author)" />
                <ReactQuill
                  theme="snow"
                  placeholder="Write something about yourself ..."
                  className="h-36 mb-12"
                  required
                  onChange={(value) => {
                    setFormData({ ...formData, authorbio: value });
                  }}
                />
              </div>
              <div className=" mt-5">
                {/* <Label value="Your password" /> */}
                <TextInput
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={handleChange}
                />
              </div>

              <Button
                gradientDuoTone="purpleToPink"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading ...</span>
                  </>
                ) : (
                  "Sign Up"
                )}
              </Button>

              <OAuth />
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account?</span>
              <Link to="/sign-in" className="text-blue-500">
                Sign In
              </Link>
            </div>
            {errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
