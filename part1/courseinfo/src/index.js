import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part
        name={props.course.parts[0].name}
        exercises={props.course.parts[0].exercises}
      ></Part>
      <Part
        name={props.course.parts[1].name}
        exercises={props.course.parts[1].exercises}
      ></Part>
      <Part
        name={props.course.parts[2].name}
        exercises={props.course.parts[2].exercises}
      ></Part>
    </>
  );
};

const Total = (props) => {
  let parts = props.course.parts;
  let total = parts.reduce((sum, value) => sum + value.exercises, 0);
  return (
    <>
      <p> Total courses is: {total}</p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course}></Header>
      <Content course={course}></Content>
      <Total course={course}></Total>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
