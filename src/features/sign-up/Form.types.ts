export interface SignUpFormProps {
  onSubmit: (values: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => void;
}
