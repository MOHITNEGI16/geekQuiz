export default function ScoreBoard({ score,onSetScore, questions, onDataChange, count, onCountChange, wrongAnswer, shuffleQuestions }) {
  function handleButton(){
    onDataChange(shuffleQuestions([...questions]));
    onCountChange(count=1);
    onSetScore(score=0)
    wrongAnswer=[];
  }
  return (
    <section id='scoreBoard'>
      {wrongAnswer.length === 0 ?
        <div id='congrats'>
          <h2>Congratulations! You got all answers correct!</h2>
          <p>Your final score is {questions.length} out of {questions.length}</p>
          <button onClick={handleButton}>Reset</button>
        </div> :
        <div className="scoreSection">
  <h2 style={{color:"#100A4A"}}>Quiz Results</h2>
          <ul>
            {wrongAnswer.map((questionInd, index) => (
              <li key={index} style={{height:`${90/wrongAnswer.length}%`}}>
                {questions[questionInd].questionText} - {questions[questionInd].options[questions[questionInd].answerId-1 ].text}
              </li>
            ))}
          </ul>
          <p>Your final score is {score} out of {questions.length}</p>
          <button onClick={handleButton}>Reset</button>
        </div>
      }
    </section>
  )
}
