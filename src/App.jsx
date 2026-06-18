import { Component } from 'react'
import Cabecalho from './Cabecalho'
import PacienteForm from './PacienteForm'
import Relogio from './Relogio'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Relogio />
        <Cabecalho nome="Clínica Saúde+" />
        <PacienteForm />
      </div>
    )
  }
}

export default App
