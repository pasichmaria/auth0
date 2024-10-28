import { createFileRoute } from "@tanstack/react-router";

import { UserPage } from "../../features/user";

export const Route = createFileRoute("/user/")({
  component: User,
});

function User() {
  return <UserPage />;
}
