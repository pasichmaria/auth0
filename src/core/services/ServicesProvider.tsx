import type { FC, ReactNode } from "react";
import { createContext, useEffect, useState } from "react";
import { container } from "tsyringe";
import { AuthService } from "./auth";
import { ToastProvider, ToastService } from "./toast";
import { Auth0Provider } from "@auth0/auth0-react";
import {Typography} from "../../shared";

interface Services {
  authService: AuthService;
  toastService: ToastService;
}

interface ServicesProviderProps {
  children: ReactNode;
}

export const ServicesContext = createContext<Services | null>(null);

export const ServicesProvider: FC<ServicesProviderProps> = ({ children }) => {
    const [ loading , setLoading ] = useState(true);
  const [services, setServices] = useState<Services | null>(null);

  useEffect(() => {
    const authService = container.resolve(AuthService);
    const toastService = container.resolve(ToastService);

    setServices({ authService, toastService });
    setLoading(false);
  }, []);

  if (!services || loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <ServicesContext.Provider value={services}>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <ToastProvider>{children}</ToastProvider>
      </Auth0Provider>
    </ServicesContext.Provider>
  );
};
