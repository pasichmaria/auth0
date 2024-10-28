import { createRouter, RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import { ServicesProvider } from "../core";
import { routeTree } from "../routeTree.gen";
import "../styles.css";
import "reflect-metadata";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ServicesProvider>
      <RouterProvider router={router} />
    </ServicesProvider>,
  );
}
