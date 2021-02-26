export interface LoginResponse {
  user: Viewer;
  success: boolean;
}

export interface Viewer {
  createdAt: null;
  email: null;
  firstname: null;
  lastname: null;
  token: null;
  updatedAt: null;
  __v: null;
  _id: null;
}

export interface Context {
  user: Viewer | null;
  isLoading: boolean;
  error: boolean;
  login: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<Viewer | null>;
  register: (
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    repeat_password: string
  ) => Promise<Viewer | null>;
  logout: () => void;
}
