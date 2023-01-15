import React from "react"
import './App.css'
import Die from "./components/Die"
import {nanoid} from 'nanoid'
import {FaReact, FaGithub} from 'react-icons/fa'
import {DiGithubFull} from 'react-icons/di'

const App = () => {

  const [dices, setDices] = React.useState(allNewDice)

  function allNewDice() {
    let randomNumbersArray = []
    for(let i = 0; i < 10; i++){
      let diceObject = {
        value: Math.floor(Math.random() * 10) + 1,
        isHeld: false,
        id: nanoid(),
      }

      randomNumbersArray.push(diceObject)
    }
    return randomNumbersArray
  }

  function createNewDice() {
    let diceObject = {
      value: Math.floor(Math.random() * 10) + 1,
      isHeld: false,
      id: nanoid(),
    }
    return diceObject;
  }

  function reRollDices() {
    setDices(oldDices => oldDices.map(die => {
      if(!die.isHeld){
        return createNewDice()
      } else {
        return {...die}
      }
    }))
  }

  function holdDice(id) {
    setDices(dices.map(dice => {
      if(dice.id === id){
        return {...dice, isHeld: !dice.isHeld}
      } else {
        return dice
      }
    }))
  }

  const diceElements = dices.map((dice) => {
    return <Die key={dice.id} isHeld={dice.isHeld} holdDice={() => holdDice(dice.id)} value={dice.value} />
  })

  return (
    <>
      <nav>
        <div className="react-section">
          <FaReact className="react-icon"/>
          <h1 className="react-header">React</h1>
        </div>
        <a href="" target="_blank">
          <div className="github-section">
            <DiGithubFull className="github-text" />
            <FaGithub className="github-icon" />
          </div>
        </a>
      </nav>
      <main>
        <div className="desc">
          <div className="header">
            <h1>Tenzies</h1>
          </div>
          <div className="para">
            <p>Keep rerolling until all dices are the same. See how many tries it'll take you. Click each dice to freeze it.</p>
          </div>
        </div>
        <div className="content">
          {diceElements}
        </div>
        <button onClick={reRollDices} className="reroll-button">Reroll</button>
      </main>
    </>
  )
}

export default App
