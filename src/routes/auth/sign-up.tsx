import { createFileRoute } from "@tanstack/react-router";

import { SignUpForm } from "../../features";

export const Route = createFileRoute("/auth/sign-up")({
  component: SignUpComponent,
});

function SignUpComponent() {
  const handleSubmit = (values: { email: string; password: string }) => {
    console.log("Sign up form submitted", values);
  };
  return <SignUpForm onSubmit={handleSubmit} />;
}
