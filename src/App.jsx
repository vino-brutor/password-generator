import { useState } from 'react'
import './App.css'
import PasswordGenerator from './hooks/PasswordGenerator.js'

function copyPassword(password, set){
  navigator.clipboard.writeText(password)
  set("Copiado")
}

function App() {
  const {password, createPassword} = PasswordGenerator()
  const [copyText, setCopyText] = useState("Copiar")

  return (
    <>
      <div className="card">
        <h1>Gerador de senahs</h1>
        <button onClick={() => createPassword(setCopy)}>
          Gerar senha
        </button>
        <h2>
          Senha gerada: {password}
        </h2>
        <button onClick={() => copyPassword(password, setCopyText)}>
          {copyText}
        </button>
      </div>
    </>
  )
}

export default App
