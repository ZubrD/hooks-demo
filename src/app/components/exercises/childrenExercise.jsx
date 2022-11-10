import React from "react";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть компоненты Списка. Вам необходимо к каждому из них добавить
        порядковый номер, относительно того, как они располагаются на странице.
        Вы можете использовать как <code>React.Children.map</code> так и{" "}
        <code>React.Children.toArray</code>
      </p>

      <ExerciseBlock />
    </CollapseWrapper>
  );
};

const Component = ({ countItem }) => {
  return <div>{countItem} Компонент списка</div>;
};

const MainComponent = ({ children }) => {
  let countItem = 0;
  return (
    <div>
      {React.Children.map(children, (child) => {
        countItem++;
        return React.cloneElement(child, {
          countItem: countItem,
        });
      })}
    </div>
  );
};

const ExerciseBlock = () => {
  return (
    <MainComponent>
      <Component />
      <Component />
      <Component />
    </MainComponent>
  );
};

export default ChildrenExercise;
