import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
  const isAuth = localStorage.getItem("auth");

  const onLogin = () => {
    localStorage.setItem("auth", "token");
  };

  const onLogOut = () => {
    delete localStorage.auth;
  };

  return (
    <CardWrapper>
      <Component
        {...props}
        onLogin={onLogin}
        onLogOut={onLogOut}
        isAuth={isAuth}
      />
    </CardWrapper>
  );
};

export default withFunctions;
