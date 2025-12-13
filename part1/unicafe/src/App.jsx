
import { useState } from "react"
import Button from "./Button"
import StatisticsLine from "./statistic";

const App = () => {
const [good, isGood] =useState(0);
const [neutral, isNeutral]=useState(0);
const [bad, isBad]=useState(0);


const handleGood = () => {
  console.log("is good")
  isGood(prev => prev + 1);  
}
const handleNutral =()=>{
  console.log("is neutral")
  isNeutral(prev => prev +1);

}
const handleBad =()=>{
  console.log("is bad")
  isBad(prev => prev +1);
  
}

  return (
    <div>
      <h1>give feedback</h1>
      
      <Button 
      onclick={handleGood}
      name="Good"
      />
      <Button 
      onclick={handleNutral}
      name="Nutral"
      />
      <Button 
      onclick={handleBad}
      name="Bad"
      />       

   
      <StatisticsLine
      good={good}
      neutral={neutral}
      bad={bad}
      />
    </div>
  )
}

export default App