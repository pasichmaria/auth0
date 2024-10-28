import type React from "react";
import { useAuth } from "../../core";
import { Grid } from "../components";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      <Header isAuthenticated={isAuthenticated} logout={logout} />
      <Grid>{children}</Grid>
      <Footer />
    </>
  );
};
