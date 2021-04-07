import React, { useState } from "react";

const Button = ({ handler, text }) => {
  return <button onClick={handler}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <td>
      {text} {value}
    </td>
  );
};

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    );
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
         <tbody>
            <tr>
            <Statistic text="Good"></Statistic>
            <Statistic value={props.good}></Statistic>
            </tr>
            <tr>
            <Statistic text="Neutral"> </Statistic>
            <Statistic value={props.neutral}> </Statistic>

            </tr>
            <tr>
            <Statistic text="Bad"> </Statistic>
            <Statistic value={props.bad}> </Statistic>

            </tr>
            <tr>
            <Statistic text="All"> </Statistic>
            <Statistic value={props.all}> </Statistic>

            </tr>
            <tr>
            <Statistic text="Average"> </Statistic>
            <Statistic value={props.average}> </Statistic>

            </tr>
            <tr>
            <Statistic text="Positive"></Statistic>
            <Statistic value={props.positive + "%"}></Statistic>

            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttonHandlerGood = () => setGood(good + 1);

  const buttonHandlerNeutral = () => setNeutral(neutral + 1);

  const buttonHandlerBad = () => setBad(bad + 1);

  const all = good + neutral + bad;

  const average = () => (all === 0 ? 0 : (good - bad) / all);
  const positivePercent = () => (all === 0 ? 0 : (good * 100) / all);

  return (
    <>
      <h1>Give feedback</h1>
      <Button handler={buttonHandlerGood} text="Good"></Button>
      <Button handler={buttonHandlerNeutral} text="Neutral"></Button>
      <Button handler={buttonHandlerBad} text="Bad"></Button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average()}
        positive={positivePercent()}
      ></Statistics>
    </>
  );
};

export default App;
