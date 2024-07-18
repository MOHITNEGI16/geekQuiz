import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import ScoreBoard from './ScoreBoard';

const shuffleQuestions = (array) => {
  let currentIndex = array.length;
  let temp, randomInd;

  while (0 !== currentIndex) {
    randomInd = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temp = array[currentIndex];
    array[currentIndex] = array[randomInd];
    array[randomInd] = temp;
  }

  return array;
};


const question = [
  {
    questionText: 'What is the capital of the United States?',
    options: [
      { text: 'New York', id: 1 },
      { text: 'Los Angeles', id: 2 },
      { text: 'Washington, D.C.', id: 3 },
      { text: 'Chicago', id: 4 },
    ],
    answerId: 3,
  },
  {
    questionText: 'Who was the first President of the United States?',
    options: [
      { text: 'Thomas Jefferson', id: 1 },
      { text: 'George Washington', id: 2 },
      { text: 'Abraham Lincoln', id: 3 },
      { text: 'John Adams', id: 4 },
    ],
    answerId: 2,
  },
  {
    questionText: 'Which year did the United States declare independence?',
    options: [
      { text: '1776', id: 1 },
      { text: '1783', id: 2 },
      { text: '1812', id: 3 },
      { text: '1865', id: 4 },
    ],
    answerId: 1,
  },
  {
    questionText: 'What is the largest state in the United States by area?',
    options: [
      { text: 'California', id: 1 },
      { text: 'Texas', id: 2 },
      { text: 'Alaska', id: 3 },
      { text: 'Montana', id: 4 },
    ],
    answerId: 3,
  },
  {
    questionText: 'What is the national bird of the United States?',
    options: [
      { text: 'Bald Eagle', id: 1 },
      { text: 'Golden Eagle', id: 2 },
      { text: 'Peregrine Falcon', id: 3 },
      { text: 'Red-tailed Hawk', id: 4 },
    ],
    answerId: 1,
  },
];

let wrongAnswer = [];


function App() {
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(1);
  const [showAns, setShowAns] = useState(false);
  const [questions, setQuestion]=useState(question);

  return (
    <div className="App">
      <Header score={score} questions={questions} />
      {count <= questions.length ? <Main
        count={count}
        onCountChange={setCount}
        answer={showAns}
        setAnswer={setShowAns}
        score={score}
        onSetScore={setScore}
        questions={questions}
        wrongAnswer={wrongAnswer}
      /> :
      <ScoreBoard 
      score={score}
      onSetScore={setScore}
      questions={questions}
      onDataChange={setQuestion}
      count={count}
      onCountChange={setCount}
      wrongAnswer={wrongAnswer}
      shuffleQuestions={shuffleQuestions}

      />}

    </div>
  );
}









export default App;
