export default function Header({ score }) {
  return (
    <>
      <h1 className='heading'>
        USA Quiz
      </h1>
      <h3 className='heading'>Current Score : {score}</h3>
    </>

  )
}
