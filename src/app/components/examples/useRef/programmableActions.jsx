import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
  const inputRef = useRef();
  const handleClick = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };
  const handleClickWidth = () => {
    inputRef.current.style.width = "100px";
    inputRef.current.style.height = "200px";
  };
  return (
    <CardWrapper>
      <SmallTitle className="card-title">
        Программируемые действия и свойства
      </SmallTitle>
      <Divider />
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input ref={inputRef} type="email" id="email" className="form-control" />
      <button className="btn btn-primary" onClick={handleClick}>
        Перевод фокуса на инпут
      </button>
      <button className="btn btn-secondary" onClick={handleClickWidth}>
        Изменить ширину поля
      </button>
    </CardWrapper>
  );
};

export default ProgrammableActionsExample;
