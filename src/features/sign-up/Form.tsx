import { useFormik } from "formik";
import * as yup from "yup";

import { Button, Form, Input, Paper, Typography } from "../../shared";
import type { SignUpFormProps } from "./Form.types";

export function SignUp({ onSubmit }: SignUpFormProps) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      onSubmit(values);
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email").required("Required"),
      password: yup.string().required("Required"),
      confirmPassword: yup
        .string()
        .required("Required")
        .oneOf([yup.ref("password")], "Passwords must match"),
    }),
  });

  return (
    <Paper>
      <Form onSubmit={formik.handleSubmit}>
        <Typography level={2} center>
          Sign Up
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
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        <Button variant="bordered" type="submit">
          Sign Up
        </Button>
      </Form>
    </Paper>
  );
}
