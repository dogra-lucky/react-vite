import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "@/app/store";
import {errorAssertion} from "@/utils/errorAssertion";
import {loginApi} from "./authSlice";
import { useNavigate } from "react-router-dom";

export const AuthPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {loading} = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setError(null);
    const result = await dispatch(loginApi({email, password})).unwrap();
    console.log("=====result",result)
    if (result?.data.access_token) localStorage.setItem("token", result.data.access_token);
    try {
        console.log(loading);
        navigate("/home");
    } catch (error: unknown) {
      setError(errorAssertion(error));
    }
  };

  return (
    <>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        {error && <p style={{color: "red"}}>{error}</p>}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </>
  );
};
