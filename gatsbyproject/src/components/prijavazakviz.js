import React from "react"
import { Link } from "gatsby"
const defaultState = {
  name: "",
  imetima: "",
  brojmoba: "",
  brojclanova: "",
  email: "",
  nameError: "",
  emailError: "",
  imetimaError: "",
  brojclanovaError: "",
  brojmobaError: "",
}
class MyForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      imetima: "",
      brojmoba: "",
      brojclanova: "",
      email: "",
      nameError: "",
      emailError: "",
      imetimaError: "",
      brojclanovaError: "",
      brojmobaError: "",
    }
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }
  handleBrojClanovaChange(e) {
    this.setState({ brojclanova: e.target.value })
  }

  handlePhoneChange(e) {
    this.setState({ brojmoba: e.target.value })
  }

  handleTeamChange(e) {
    this.setState({ imetima: e.target.value })
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  validate = () => {
    let nameError = ""
    let emailError = ""
    let imetimaError = ""
    let brojclanovaError = ""
    let brojmobaError = ""

    if (!this.state.email.includes("@")) {
      emailError = "Unesite važeću e-mail adresu"
    }
    if (!this.state.name) {
      nameError = "Unesite ime"
    }
    if (!this.state.imetima) {
      imetimaError = "Unesite ime ekipe"
    }
    if (!this.state.brojclanova) {
      brojclanovaError = "Unesite broj članova ekipe"
    } else if (!(this.state.brojclanova < 5)) {
      brojclanovaError = "Broj članova ekipe ne smije biti veći od 5"
    }
    if (!this.state.brojmoba) {
      brojmobaError = "Unesite broj mobitela"
    }

    if (
      emailError ||
      nameError ||
      imetimaError ||
      brojclanovaError ||
      brojmobaError
    ) {
      this.setState({
        emailError,
        nameError,
        imetimaError,
        brojclanovaError,
        brojmobaError,
      })
      return false
    }

    return true
  }
  onSubmit = () => {
    const isValid = this.validate()
    if (isValid) {
      console.log(this.state)
      this.setState(defaultState)
      alert("Prijava je uspješno izvršena")
      window.location.replace("/")
    }
  }

  render() {
    return (
      <div className="prijavaforma">
        <form name="Login" className="prijava" style={{ margin: 0 }}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Ime i prezime"
            className="box"
            onChange={this.handleNameChange.bind(this)}
          />
          <div style={{ fontSize: 15, color: "red" }}>
            {this.state.nameError}
          </div>

          <input
            type="text"
            name="imetima"
            value={this.state.imetima}
            placeholder="Ime ekipe"
            className="box"
            onChange={this.handleTeamChange.bind(this)}
          />
          <div style={{ fontSize: 15, color: "red" }}>
            {this.state.imetimaError}
          </div>
          <input
            type="text"
            name="brojclanova"
            value={this.state.brojclanova}
            placeholder="Broj članova"
            className="box"
            onChange={this.handleBrojClanovaChange.bind(this)}
          />
          <div style={{ fontSize: 15, color: "red" }}>
            {this.state.brojclanovaError}
          </div>

          <input
            type="text"
            name="brojmoba"
            value={this.state.brojmoba}
            placeholder="Broj mobitela"
            className="box"
            onChange={this.handlePhoneChange.bind(this)}
          />
          <div style={{ fontSize: 15, color: "red" }}>
            {this.state.brojmobaError}
          </div>
          <input
            type="text"
            name="email"
            value={this.state.email}
            placeholder="E-mail"
            className="box"
            onChange={this.handleEmailChange.bind(this)}
          />
          <div style={{ fontSize: 15, color: "red" }}>
            {this.state.emailError}
          </div>
          <div className="buttonsPrijava">
            <Link to="/">
              <button type="button" className="butt-odustani" label="Odustani ">
                Odustani
              </button>
            </Link>

            <button
              type="button"
              className="butt"
              label="Pošalji "
              onClick={this.onSubmit}
            >
              Pošalji
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default MyForm
