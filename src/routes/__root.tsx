import { createRootRoute, Outlet } from "@tanstack/react-router";

import { Layout } from "../shared";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
}
