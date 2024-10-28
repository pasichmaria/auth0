export interface LoginFormProps {
  onSubmit: (values: { email: string; password: string }) => void;
  loginWithRedirect: () => void;
}
