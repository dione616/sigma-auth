import axios from "axios";
import React, { useEffect } from "react";
import { Context, Viewer } from "../lib/types";

const AuthAPIContext = React.createContext<Context>({
  user: null,
  isLoading: false,
  error: false,
  login: async () => null,
  register: async () => null,
  logout: () => console.log(`Loged out`),
});

const AuthAPIContextProvider = ({ children }: { children: any }) => {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const login = async (values: {
    email: string;
    password: string;
  }): Promise<Viewer | null> => {
    const response = await axios.post(`/login`, values).then((res) => {
      if (res.data.user) {
        setUser(res.data.user);
        setError(false);

        localStorage.setItem("user", JSON.stringify(res.data.user));
      } else {
        setError(res.data.error);
        setTimeout(() => {
          setError(false);
        }, 1000);
      }

      return res.data;
    });
    return response;
  };

  const register = async (
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    repeat_password: string
  ): Promise<Viewer | null> => {
    const response = await axios
      .post(`/register`, {
        firstname,
        lastname,
        email,
        password,
        repeat_password,
      })
      .then((res) => {
        if (res.data.user) {
          setUser(res.data.user);
          setError(false);

          localStorage.setItem("user", JSON.stringify(res.data.user));
        } else {
          setError(res.data.error);

          setTimeout(() => {
            setError(false);
          }, 1000);
        }

        return res.data;
      });

    return response;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthAPIContext.Provider
      value={{
        user,
        isLoading: false,
        error,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthAPIContext.Provider>
  );
};

export { AuthAPIContextProvider, AuthAPIContext };
