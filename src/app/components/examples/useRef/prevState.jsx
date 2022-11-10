import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider"
const PrevStateExample = () => {
  const prevState = useRef();
  const [otherState, setOtherState] = useState(0);
  const toggleOtherState = () => {
    setOtherState((prevState) => prevState + 1);
  };
  useEffect(() => {
    prevState.current = otherState;
  }, [otherState]);
  return (
    <CardWrapper>
      <SmallTitle>Предыдущее состояние</SmallTitle>
      <Divider />
      <p>prev State: {prevState.current}</p>
      <p>current State: {otherState}</p>
      <button className="btn btn-primary" onClick={toggleOtherState}>
        toggle other state
      </button>
    </CardWrapper>
  );
};

export default PrevStateExample;
