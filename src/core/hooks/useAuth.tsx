import { useObservable } from "./useObservable";
import { useServices } from "./useServices";

export const useAuth = () => {
  const { authService } = useServices();
  const authState = useObservable(authService.state$);

  const isAuthenticated = !!authState?.token;

  const login = async (values: { email: string; password: string }) => {
    authService.login(values);
  };

  const logout = async () => {
    authService.logout();
  };

  return { login, logout, isAuthenticated };
};
