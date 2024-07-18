export default function Main({ count, onCountChange, answer, setAnswer, score, onSetScore,questions,wrongAnswer }) {
  const answerId = questions[count - 1].answerId;

  function handleOptionsClick(id) {
    console.log(id, "click happening")
    setAnswer(true);

    // let timeInterval
    function callback() {
      if (id === questions[count - 1].answerId) {
        onSetScore(score + 1);
        onCountChange(count + 1);
      }
      else {
        wrongAnswer.push(count-1)
        onCountChange(count + 1);
      }
      setAnswer(false);

    }
    setTimeout(callback, 2000)
  }

  return (
    <main className='mainContainer'>
      <h2 className='heading' style={{ color: "#F0F0F0" }}>Question {count} out of 5</h2>
      <section className='questionSection'>
        <h2 className='question'>{questions[count - 1].questionText}</h2>

        <ul>
          {questions[count - 1].options.map((option) =>
            <li onClick={() => { return handleOptionsClick(option.id) }} key={option.id}>{option.text}</li>
          )}
        </ul>

        {
          answer && count <= questions.length ?
            <h2>
              <span style={{ color: "#100A4A" }}>The answer for this question {questions[count - 1].options[answerId - 1].text}</span>

            </h2> :
            ""
        }
      </section>
    </main>
  )
}
