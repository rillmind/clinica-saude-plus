import { Component } from 'react'

class Relogio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hora: new Date().toLocaleTimeString('pt-BR')
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString('pt-BR') })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return <div className="relogio">{this.state.hora}</div>
  }
}

export default Relogio
