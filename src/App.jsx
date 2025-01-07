import { useState } from 'react'
import './App.css'
import PasswordGenerator from './hooks/PasswordGenerator.js'
import Input from './components/input.jsx'

function copyPassword(password, set){
  navigator.clipboard.writeText(password)
  set("Copiado")
}

function App() {
  const {password, createPassword} = PasswordGenerator()
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(10) //state pro input de tamanho, declaramos no componente pai
  const [showInput, setShowInput] = useState(false)//state de condição rpa mostrar se o input aparece ou não

  /*cria um evento de on change no input pra assim o input sempre mudar de valor quando for mudado
  e assim coloca a função de setState pra mudar o valor do input usando ev.target.value*/

  return (
    <>
      <div className="card">
        <h1>Gerador de senahs</h1>
        <div>
          <label htmlFor="showInput">Customizar tamanho:</label>
          <input type="checkbox" 
          id="showInput"
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}/>
        </div>
        {showInput ? (
        <div>
          <label htmlFor="passwordSize">Tamanho:</label>
          <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize}></Input>
        </div>
        ) : null}
        <button onClick={() => createPassword(passwordSize, setCopyText)}>
          Gerar senha
        </button>
        <button onClick={() => copyPassword(password, setCopyText)}>
          {copyText}
        </button>
        <h2>
          Senha gerada: {password}
        </h2>
      </div>
    </>
  )
}

export default App
