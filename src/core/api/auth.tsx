interface LoginResponse {
  error?: boolean;
  token: string;
}

export function login(credentials: {
  email: string;
  password: string;
}): Promise<LoginResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.email === "admin@gmail.com" &&
        credentials.password === "admin"
      ) {
        resolve({ token: Math.random().toString(36).substring(7) });
      }
      reject(new Error("Invalid email or password"));
    }, 200);
  });
}
