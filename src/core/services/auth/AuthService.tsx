import { BehaviorSubject } from "rxjs";
import { login as loginAPI } from "../../api/auth";

export interface State {
  token?: string;
  error?: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

export class AuthService {
  private stateSubject = new BehaviorSubject<State>({});
  public state$ = this.stateSubject.asObservable();

  private authSubject = new BehaviorSubject<LoginCredentials | null>(null);
  constructor() {
    this.authSubject.subscribe((credentials) => {
      if (credentials) {
        loginAPI(credentials)
          .then((response) => {
            this.stateSubject.next({ token: response.token });
          })
          .catch((error) => {
            this.stateSubject.next({ error: error.message });
          });
      }
    });
  }

  login(credentials: LoginCredentials) {
    this.authSubject.next(credentials);
  }

  logout() {
    this.stateSubject.next({});
  }
}
