import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Display from './components/Display'
import { evaluate, log } from 'mathjs'
import SmallButtons from './components/SmallButtons'

function App() {
  const [input, setInput] = useState('')
  const [mensagge, setMensagge] = useState('')



  const pushButton = (entry) => {

    if (entry === 'log') {
      setInput(input + 'log10(')
    } else if (entry === ')') {
      setInput(input + ')')
    } else if (entry === 'sin') {
      setInput(input + 'sin(')
    } else if (entry === 'cos') {
      setInput(input + 'cos(')
    } else if (entry === 'tan') {
      setInput(input + 'tan(')
    } else if (entry === 'Deg') {
      setMensagge('Operacion en desarrollo')
    } else if (entry === 'Grad') {
      setMensagge('Operacion en desarrollo')
    } else if (entry === 'Rad') {
      setInput('')
    } else {
      setInput(input + entry)
    }
  }

  const result = () => {

    // Verificar el equilibrio de paréntesis
    const openingParenthesesCount = (input.match(/\(/g) || []).length;
    const closingParenthesesCount = (input.match(/\)/g) || []).length;

    setMensagge('')
    if (openingParenthesesCount !== closingParenthesesCount) {
      setMensagge("Error: Falta un paréntesis.")
      return;
    }
    setInput(evaluate(input))
  }

  const allClear = () => {
    setInput('')
    setMensagge('')
  }

  const deleteCharacter = () => {
    setInput(input.slice(0, -1))
  }

  return (
    <div className='App'>
      <div className='calculator-container'>
        <div className='logo-container'>
          <div className='logo'>CASIO</div>
          <div className='model'>Fx-82MS</div>
        </div>
        <div className='display-container'>
          <Display view={input} />
        </div>
        <div className='message'>
          {mensagge}
        </div>
        <div className='small-buttons-container'>
          <SmallButtons handleOnButton={pushButton}>deg</SmallButtons>
          <SmallButtons handleOnButton={pushButton}>(</SmallButtons>
          <SmallButtons handleOnButton={pushButton}>)</SmallButtons>
          <SmallButtons handleOnButton={pushButton}>^</SmallButtons>
          <SmallButtons handleOnButton={pushButton}>sin</SmallButtons>
          <SmallButtons handleOnButton={pushButton}>cos</SmallButtons>
        </div>
        <div className='small-buttons-container'>
          <SmallButtons handleOnButton={pushButton}>log</SmallButtons>
          <SmallButtons handleOnButton={pushButton}>sqrt</SmallButtons>
          <SmallButtons handleOnButton={pushButton}>!</SmallButtons>
          <SmallButtons handleOnButton={pushButton}>^</SmallButtons>
          <SmallButtons handleOnButton={pushButton}>tan</SmallButtons>
          <SmallButtons handleOnButton={pushButton}>In</SmallButtons>
        </div>
        <div className='small-buttons-container'>
          <SmallButtons handleOnButton={pushButton}>Deg</SmallButtons>
          <SmallButtons handleOnButton={pushButton}>Rad</SmallButtons>
          <SmallButtons handleOnButton={pushButton}>Grad</SmallButtons>
          <SmallButtons ></SmallButtons>
          <SmallButtons ></SmallButtons>
          <SmallButtons ></SmallButtons>
        </div>

        <div className='row'>
          <Buttons handleOnButton={pushButton}>7</Buttons>
          <Buttons handleOnButton={pushButton}>8</Buttons>
          <Buttons handleOnButton={pushButton}>9</Buttons>
          <Buttons handleOnButton={deleteCharacter}>DEL</Buttons>
          <Buttons handleOnButton={allClear}>AC</Buttons>
        </div>
        <div className='row'>
          <Buttons handleOnButton={pushButton}>4</Buttons>
          <Buttons handleOnButton={pushButton}>5</Buttons>
          <Buttons handleOnButton={pushButton}>6</Buttons>
          <Buttons handleOnButton={pushButton}>*</Buttons>
          <Buttons handleOnButton={pushButton}>/</Buttons>
        </div>
        <div className='row'>
          <Buttons handleOnButton={pushButton}>1</Buttons>
          <Buttons handleOnButton={pushButton}>2</Buttons>
          <Buttons handleOnButton={pushButton}>3</Buttons>
          <Buttons handleOnButton={pushButton}>+</Buttons>
          <Buttons handleOnButton={pushButton}>-</Buttons>
        </div>
        <div className='row'>
          <Buttons handleOnButton={pushButton}>0</Buttons>
          <Buttons handleOnButton={pushButton}>.</Buttons>
          <Buttons handleOnButton={pushButton}>EXP</Buttons>
          <Buttons handleOnButton={pushButton}>%</Buttons>
          <Buttons handleOnButton={result}>=</Buttons>
        </div>
      </div>
    </div>
  )
}

export default App
