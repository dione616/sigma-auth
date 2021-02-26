import React, { useContext } from "react";
import ReactDOM from "react-dom";
import App from "./components/app/index";
import { ThemeProvider } from "styled-components";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./components/styles/theme";
import { AuthAPIContextProvider } from "./API/auth";
import WithApp from "./components/app/index";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthAPIContextProvider>
          <WithApp />
        </AuthAPIContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
