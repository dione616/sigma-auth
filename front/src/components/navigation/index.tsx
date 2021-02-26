import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { Context, Viewer } from "../../lib/types";
import { SubmitButton } from "../button/submit/styles";
import { NavWrapper, Name, LogOutNav } from "./styles";

const Navigation = ({ context }: { context: Context }) => {
  const logOut = () => {
    context.logout();
  };

  return (
    <NavWrapper>
      <>
        {context && context.user ? (
          <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/profile'>
              <Name>
                {context.user?.firstname}
                <LogOutNav>
                  <SubmitButton onClick={logOut}>Log Out</SubmitButton>
                </LogOutNav>
              </Name>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
          </>
        )}
      </>
    </NavWrapper>
  );
};

export default Navigation;
