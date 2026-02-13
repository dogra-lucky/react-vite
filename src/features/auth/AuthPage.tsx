import {useDispatch} from "react-redux";
import type {AppDispatch} from "@/app/store";
import {errorAssertion} from "@/utils/errorAssertion";
import {loginApi} from "./authSlice";
import {useNavigate} from "react-router-dom";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import toast from "react-hot-toast";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginSchema, type LoginFormValues} from "./loginSchema";

export const AuthPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit:withValidation,
    formState: {errors},
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {email: "", password: ""},
  });


  const handleLoginSubmit = async (data: LoginFormValues) => {
    try {
      const result = await dispatch(
        loginApi({email: data.email, password: data.password}),
      ).unwrap();
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
      <Form onSubmit={withValidation(handleLoginSubmit)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            {...register("email" , {required: "Email is required"})}
            isInvalid={!!errors.email}
            placeholder="name@example.com"
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message || "Invalid email"}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            {...register("password" , {required: "Password is required"})}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password?.message || "Invalid password"}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="link" type="submit">
          Sign In
        </Button>
      </Form>
    </>
  );
};
