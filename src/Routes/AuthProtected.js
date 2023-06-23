import React from "react";
import { Redirect, Route,BrowserRouter, Routes, useLocation } from "react-router-dom";

import { useProfile } from "../Components/Hooks/UserHooks";

const AuthProtected = (props) => {
  const { userProfile, loading } = useProfile();

  const location = useLocation();

  // The current location.
  // console.log("lll,", location,userProfile, loading);


  /*
    redirect is un-auth access protected routes via url
    */

  if (!userProfile && loading) {
    return (
      <Redirect to={{ pathname: "/pages-home-page", state: { from: props.location } }} />
    );
  }

  return <>{props.children}</>;
};

const AccessRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (<> <Component {...props} /> </>);
      }}
    />
  );
};

export { AuthProtected, AccessRoute };
