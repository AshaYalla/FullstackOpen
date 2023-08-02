import { useState } from 'react'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <button onClick={()=>{setGood(good+1)}}>Good</button> 
      {good}
      <button onClick={()=>{setNeutral(neutral+1)}}>Neutral</button> 
      {neutral}
      <button onClick={()=>{setBad(bad+1)}}>Bad</button> 
      {bad}
    </div>
  )
}

export default App