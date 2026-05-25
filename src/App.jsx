import Dice from "./Dice.jsx"
import { useEffect,useRef,useState } from "react"
import './App.css'
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

function App() {

  const [dice, setDice] = useState(generateAllNewDice)
  //create roll count state
  const [rollCount,setRollCount] = useState(0)
  //create timer state
  const[seconds,setSeconds] = useState(0)
  //create state for best roll count
  const[bestRollCount,setBestRollCount] = useState(Number(localStorage.getItem("bestRollCount"))||Infinity)

  //create state for best time count
  const[bestTime,setBestTime] = useState(Number(localStorage.getItem("bestTime"))||Infinity)

  //generates a new set of 10 random dice num
  function generateAllNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id:nanoid(), //unique id for react key
        value:Math.floor(Math.random() * 6) + 1,  //changing array to object
        isHeld:false});
    }
    return newDice;
  }
  // to find winner
  const gameWon = 
  dice.every(die=>die.isHeld) &&
  dice.every(die=>die.value===dice[0].value)

//Timer effect
useEffect(() => {
  if (gameWon) return //stop timer when game ends

  const timerId = setInterval(() => {
    setSeconds(prev => prev + 1)
  }, 1000)

  //cleanup to prevent memory leaks
  return () => clearInterval(timerId)
}, [gameWon])


// update best score when game is won
useEffect(() => {
  if (gameWon) {
    if (rollCount < bestRollCount) {
      setBestRollCount(rollCount)
      localStorage.setItem("bestRollCount", rollCount)
    }

    if (seconds < bestTime) {
      setBestTime(seconds)
      localStorage.setItem("bestTime", seconds)
    }
  }
}, [gameWon, rollCount, seconds, bestRollCount, bestTime])


  //convert dice array into Dice components
  const diceElements = dice.map(die => (
    <Dice 
    key={die.id} 
    value={die.value}
    isHeld ={die.isHeld}
    hold ={()=>hold(die.id)} //pass click handler
     />
  ))

 //handles roll button click
  function roll(){
    if(gameWon){
      //reset game
      setDice(generateAllNewDice())
      setRollCount(0)
      setSeconds(0)
    }
    else{
      //roll dice(only unheld ones change)
    setDice(prevDice=> prevDice.map(die=>die.isHeld?die:{...die,value:Math.floor(Math.random()*6)+1}))

    setRollCount(prevCount=>prevCount+1)
  }
}


  //function to toggle hold state
  function hold(id){
    setDice(prevDice=> prevDice.map(die=> die.id===id?{...die,isHeld:!die.isHeld}:die
    ))
  }

  //accessibility message for screen readers 
  const ariaMessage = gameWon?"Congratulations! You won! Press New Game to start again.":""
  return (
<main className="game-container">
  {gameWon && <Confetti />}

  <div className="game-card">
    
    <header className="header">
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Try to get all dice to match. Hold the dice you want to keep, then roll the rest until every die shows the same value.
      </p>
    </header>

  
      {/* game statistics */}
    <section className="stats">
      <p>Rolls: {rollCount}</p>
      <p>Time: {seconds}s</p>
      <p>Best Rolls: {bestRollCount === Infinity ? "--" : bestRollCount}</p>
      <p>Best Time: {bestTime === Infinity ? "--" : `${bestTime}s`}</p>
    </section>

    <section className="dice-container">
      {diceElements}
    </section>

    <button className="rollDice" onClick={roll}>
      {gameWon ? "New Game" : "Roll"}
    </button>

    <p className="screenReaderOnly" aria-live="polite">{ariaMessage}</p>

  </div>
</main>
  )
}

export default App


// future improvement  
// only start timer when first roll
// new game when draw



