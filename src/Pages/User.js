import React from 'react'

import '../Styles/form.css'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }
    this.handleEmail = this.handleEmail.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePasswort = this.handlePasswort.bind(this)
    this.handleUsernameOrEmail = this.handleUsernameOrEmail.bind(this)
    this.handleRole = this.handleRole.bind(this)

    this.handleSubmitChangeLogin = this.handleSubmitChangeLogin.bind(this)
    this.handleSubmitChangeRegister = this.handleSubmitChangeRegister.bind(this)
  }

  componentDidMount() {
    this.setState({})
    this.swap()

    /**
     * Element to be changed come here ("titles", "rank-text" etc.)
     */
  }

  /**
   * LOGIN/SIGNUP FORM IN THIS RETURN METHOD
   * Prefferably with a login fom
   */

  handleUsername(event) {
    this.setState({
      username: event.target.value,
    })
  }
  handleUsernameOrEmail(event) {
    this.setState({ usernameOrEmail: event.target.value })
  }
  handleName(event) {
    this.setState({

        name: event.target.value,
    })
  }
  handleEmail(event) {
    this.setState({
      email: event.target.value,
    })
  }
  handlePasswort(event) {
    this.setState({
      password: event.target.value,
    })
  }

  handleRole(event) {
    this.setState({
      role: event.target.value,
    })
  }

  handleSubmitChangeRegister(event) {
    event.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state),
    }
    fetch('http://127.0.0.1:8080/api/auth/signup', requestOptions)
      .then((response) => response)
      .then((json) => {
        const jsonAnsw = JSON.stringify(json)
        if (json.status === 200) {
          alert(
            'Your Account was successfully created. Pls continue to the Login.',
          )
        } else if (json.status === 500) {
          alert('Internal Server Error. Try again or contact the support')
        }
        const test = JSON.stringify(this.state)
        alert(test)
      })
  }
  handleSubmitChangeLogin(event) {
    event.preventDefault();

    const requestOptionsPost = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state),
    }

    const requestOptionsGet = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }

    fetch('http://127.0.0.1:8080/api/auth/signin', requestOptionsPost)
      .then((response) => response)
      .then((json) => {
        var jsonAnsw = JSON.stringify(json)
        if (json.status === 200) {
          this.props.changeState({
            logedIn: true
          })
        }
        else{
          alert("An error Occurred. Unfortunately we aren't able to help you...")
        }
      })
  }
  //Needs udate
  swap = () => {
    const switchers = [...document.querySelectorAll('.switcher')]

    switchers.forEach((item) => {
      item.addEventListener('click', function () {
        switchers.forEach((item) =>
          item.parentElement.classList.remove('is-active'),
        )
        this.parentElement.classList.add('is-active')
      })
    })
  }

  render() {
    if (this.props.appState.logedIn === true) {
      return (
        <>
          <h1>Welcome back {this.props.appState.username}</h1>

          

        </>
      )
    } else {
      return (
        <>
          <section class="forms-section">
            <div class="forms">
              <div class="form-wrapper is-active">
                <button
                  type="button"
                  class="switcher switcher-login"
                  onClick={this.swap}
                >
                  Login
                  <span class="underline"></span>
                </button>
                <form
                  class="form form-login"
                  onSubmit={this.handleSubmitChangeLogin}
                >
                  <fieldset>
                    <legend>
                      Please, enter your email and password for login.
                    </legend>
                    <div class="input-block">
                      <label for="login-email">E-Mail or Username</label>
                      <input
                        id="login-email"
                        type="text"
                        required
                        value={this.state.usernameOrEmail}
                        onChange={this.handleUsernameOrEmail}
                      />
                    </div>
                    <div class="input-block">
                      <label for="login-password">Password</label>
                      <input
                        id="login-password"
                        type="password"
                        required
                        value={this.state.password}
                        onChange={this.handlePasswort}
                      />
                    </div>
                  </fieldset>
                  <button type="submit" class="btn-login">
                    Login
                  </button>
                </form>
              </div>
              <div class="form-wrapper">
                <button type="button" class="switcher switcher-signup">
                  Sign Up
                  <span class="underline"></span>
                </button>
                <form
                  class="form form-signup"
                  onSubmit={this.handleSubmitChangeRegister}
                >
                  <fieldset>
                    <legend>
                      Please, enter your email, username, name and password for
                      sign up.
                    </legend>
                    <div class="input-block">
                      <label for="signup-email">E-Mail</label>
                      <input
                        id="signup-email"
                        type="email"
                        required
                        value={this.state.email}
                        onChange={this.handleEmail}
                      />
                    </div>
                    <div class="input-block">
                      <label for="signup-username">Username</label>
                      <input
                        id="signup-username"
                        type="text"
                        required
                        value={this.state.username}
                        onChange={this.handleUsername}
                      />
                    </div>
                    <div class="input-block">
                      <label for="signup-name">Name</label>
                      <input
                        id="signup-name"
                        type="text"
                        required
                        value={this.state.name}
                        onChange={this.handleName}
                      />
                    </div>
                    <div class="input-block">
                      <label for="signup-password">Password</label>
                      <input
                        id="signup-password"
                        type="password"
                        required
                        value={this.state.password}
                        onChange={this.handlePasswort}
                      />
                    </div>
                    <div class="input-block" onChange={this.handleRole}>
                      <label for="Coach">Coach</label>
                      <input
                        name="select-rank"
                        id="Coach"
                        type="radio"
                        required
                        value="ROLE_COACH"
                      />
                      <label for="Anbieter">Typ</label>
                      <input
                        name="select-rank"
                        id="Anbieter"
                        type="radio"
                        required
                        value="ROLE_OWNER"
                      />
                    </div>
                  </fieldset>
                  <button type="submit" class="btn-signup">
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </section>
          <hr />
        </>
      )
    }
  }
}
export default User
