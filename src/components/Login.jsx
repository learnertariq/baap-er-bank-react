import React, { useState } from "react";
import isValidUser from "../Logic/validateUser.js";
import { useNavigate } from "react-router-dom";
import Error from "./Error.jsx";
import Input from "./Input.jsx";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleChange(e) {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(false);

    if (isValidUser({ email, password })) navigate("/banking");

    setError(true);
  }

  return (
    <div className="container mx-auto rounded-xl bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 p-4 sm:p-12">
      <h2 className="text-3xl font-bold">Please Login First</h2>
      <form action="" className="my-4">
        <Input placeholder="Email" type="email" onChange={handleChange} />
        <Input placeholder="Password" type="password" onChange={handleChange} />

        {error ? <Error /> : null}
        <button
          type="submit "
          className="px-8 py-2 bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl font-bold uppercase tracking-wider"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}
