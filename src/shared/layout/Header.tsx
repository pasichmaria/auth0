import { Button, Link, Row } from "../components";

export const Header = ({
  isAuthenticated,
  logout,
}: {
  isAuthenticated: boolean;
  logout: () => void;
}) => {
  return (
    <header className="p-2 shadow-md">
      <Row className="justify-between">
        <Link to="/" params={{}} search={{}}>
          Home
        </Link>
        <nav>
          {isAuthenticated && (
            <Row>
              <Button onClick={logout} size="md">
                Logout
              </Button>
              <Link to="/user" params={{}} search={{}}>
                Profile
              </Link>
            </Row>
          )}
        </nav>
      </Row>
    </header>
  );
};
