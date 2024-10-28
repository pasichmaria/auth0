import { createFileRoute } from "@tanstack/react-router";
import { useAuth0 } from "@auth0/auth0-react";

import { useAuth, useToast } from "../../core";
import { LoginForm } from "../../features";

export const Route = createFileRoute("/auth/login")({
  component: LoginComponent,
});

function LoginComponent() {
  const { login } = useAuth();
  const { loginWithRedirect } = useAuth0();
  const { showToast } = useToast();

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      await login(values);
      showToast({
        title: "Login successful",
        description: "You are now logged in",
      });
    } catch (error) {
      showToast({
        title: "Login failed",
        description: "Please check your email and password",
      });
    }
  };

  return (
    <LoginForm onSubmit={handleLogin} loginWithRedirect={loginWithRedirect} />
  );
}
