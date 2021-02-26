import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { AuthAPIContext, AuthAPIContextProvider } from "../../API/auth";
import { Context, Viewer } from "../../lib/types";
import Home from "../home";
import Login from "../login";
import Navigation from "../navigation";
import Profile from "../profile";
import Register from "../register";
import Tweets from "../tweets";
import { AppWrapper } from "./styles";

const App = ({ context }: { context: Context }) => {
  console.log(`props`);
  console.log(context);

  return (
    <AppWrapper>
      <Navigation context={context} />
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/profile' render={() => <Profile />} />
        <Route path='/login' render={() => <Login context={context} />} />
        <Route path='/register' render={() => <Register context={context} />} />
      </Switch>
    </AppWrapper>
  );
};

const WithApp = () => {
  const context = React.useContext(AuthAPIContext);

  return <App context={context} />;
};

export default WithApp;
