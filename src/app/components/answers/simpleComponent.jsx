import React from "react";
import CardWrapper from "../common/Card";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
  return (
    
      <>
        {isAuth ? (
          <button className="btn btn-primary" onClick={onLogOut}>
            Выйти
          </button>
        ) : (
          <button className="btn btn-primary" onClick={onLogin}>
            Войти
          </button>
        )}
      </>
  );
};

export default SimpleComponent;
