import { useFormik } from "formik";
import * as yup from "yup";

import { Button, Form, Input, Paper, Typography } from "../../shared";
import type { LoginFormProps } from "./Form.types";

export function Login({ onSubmit, loginWithRedirect }: LoginFormProps) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: yup.object({
      email: yup.string().email("Invalid email").required("Required"),
      password: yup.string().required("Required"),
    }),
  });

  return (
    <Paper>
      <Form onSubmit={formik.handleSubmit}>
        <Typography level={3} code className="text-center">
          login to your account
        </Typography>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Button type="submit">Login</Button>
      </Form>
      <Typography center level={5}>
        or
      </Typography>
      <Button fullWidth variant="bordered" onClick={loginWithRedirect}>
        Login with Auth0
      </Button>
    </Paper>
  );
}
