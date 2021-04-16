import React, { useState } from "react";

const Buttons = ({ handler, text }) => {
  return <button onClick={handler}>{text}</button>;
};
const ShowMostVoted = ({ arrVotes, anecdotes }) => {
  let mostVoted = arrVotes.indexOf(Math.max(...arrVotes));
  return <div>{anecdotes[mostVoted]}</div>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [arrVotes, setVotes] = useState(
    Array.apply(null, new Array(anecdotes.length)).map(
      Number.prototype.valueOf,
      0
    )
  );

  const getRandomSelected = () => {
    return Math.round(Math.random() * (anecdotes.length - 1));
  };

  const setToSelected = () => setSelected(getRandomSelected);

  const assignVote = () => {
    let copy = [...arrVotes];
    copy[selected] += 1;
    setVotes(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {arrVotes[selected]} votes </p>
      <Buttons handler={assignVote} text="Vote"></Buttons>
      <Buttons handler={setToSelected} text="Next anecdote"></Buttons>
      <h1>Anecdote with most votes</h1>
      <ShowMostVoted arrVotes={arrVotes} anecdotes={anecdotes}></ShowMostVoted>
    </div>
  );
};

export default App;
