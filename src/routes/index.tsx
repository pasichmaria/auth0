import { createFileRoute } from "@tanstack/react-router";
import { Col, Link, List, Paper, Row, Typography } from "../shared";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <Row>
      <Col>
        <Paper type="rounded" elevation={2} color="secondary">
          <Col className={"p-4"}>
            <Typography type="secondary" level={3}>
              Tech Stack
            </Typography>
            <List
              color="gray-100"
              items={[
                {
                  id: "1",
                  text: "React + Vite",
                },
                { id: "2", text: "TypeScript (SWC)" },
                {
                  id: "3",
                  text: "Tailwind CSS + radix-ui/toast",
                },
                { id: "4", text: "TanStack Router + mock auth" },
                { id: "5", text: "Biome.js" },
              ]}
            />
          </Col>
        </Paper>
        <Link params={{}} to="/auth/login" variant="filled" search={{}}>
          Go to Login
        </Link>
        <Link params={{}} to="/auth/sign-up" search={{}}>
          Go to Sign Up
        </Link>
      </Col>

      <Paper>
        <Col className="p-4">
          <Typography level={3}>Project overview</Typography>
          <Typography level={5}>
            This project demonstrates a simple authentication flow using
            TanStack Router and TS (SWC). Using Tailwind CSS for UI components
            and radix-ui/toast for notification management.
          </Typography>
          <br />
          <Typography level={3}>Login credentials</Typography>
          <Typography code>Email: admin@gmail.com</Typography>
          <Typography code>Password: password</Typography>
        </Col>
      </Paper>
    </Row>
  );
}
