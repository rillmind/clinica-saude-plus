import { Component } from 'react'

class PacienteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      idade: '',
      cidade: '',
      sexo: '',
      atendimento: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()

    const sexoLabel = {
      masculino: 'Masculino',
      feminino: 'Feminino',
      outro: 'Outro'
    }

    const atendimentoLabel = {
      consulta: 'Consulta',
      exame: 'Exame',
      retorno: 'Retorno',
      emergencia: 'Emergência'
    }

    const dados = `Paciente ${this.state.nome}
Idade: ${this.state.idade} anos
Cidade: ${this.state.cidade}
Sexo: ${sexoLabel[this.state.sexo]}
Tipo de atendimento: ${atendimentoLabel[this.state.atendimento]}`

    alert(dados)

    this.setState({
      nome: '',
      idade: '',
      cidade: '',
      sexo: '',
      atendimento: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Dados do Paciente</h2>

        <div>
          <label>Nome do paciente:</label>
          <input
            type="text"
            name="nome"
            value={this.state.nome}
            onChange={this.handleChange}
            required
          />
        </div>

        <div>
          <label>Idade:</label>
          <input
            type="number"
            name="idade"
            value={this.state.idade}
            onChange={this.handleChange}
            required
          />
        </div>

        <div>
          <label>Cidade:</label>
          <input
            type="text"
            name="cidade"
            value={this.state.cidade}
            onChange={this.handleChange}
            required
          />
        </div>

        <div>
          <label>Sexo:</label>
          <select
            name="sexo"
            value={this.state.sexo}
            onChange={this.handleChange}
            required
          >
            <option value="" disabled>Selecione</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div>
          <label>Tipo de atendimento:</label>
          <select
            name="atendimento"
            value={this.state.atendimento}
            onChange={this.handleChange}
            required
          >
            <option value="" disabled>Selecione</option>
            <option value="consulta">Consulta</option>
            <option value="exame">Exame</option>
            <option value="retorno">Retorno</option>
            <option value="emergencia">Emergência</option>
          </select>
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    )
  }
}

export default PacienteForm
