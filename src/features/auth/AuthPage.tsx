import React, {useState} from "react";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "@/app/store";
import {errorAssertion} from "@/utils/errorAssertion";
import {loginApi} from "./authSlice";
import {useNavigate} from "react-router-dom";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import toast from "react-hot-toast";

export const AuthPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    try {
      const result = await dispatch(loginApi({email, password})).unwrap();
      if (result?.data.access_token)
        localStorage.setItem("token", result.data.access_token);
      toast.success("Login successful");
      navigate("/home");
    } catch (error: unknown) {
      toast.error(errorAssertion(error));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="link" type="submit">
          Sign In
        </Button>
      </Form>
    </>
  );
};
