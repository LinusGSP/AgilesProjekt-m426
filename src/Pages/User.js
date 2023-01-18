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
    this.handleUsernameOrEmail = this.handleUsernameOrEmail.bind(this)
    this.handlePasswort = this.handlePasswort.bind(this)
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
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(this.state),
    }
    fetch('http://127.0.0.1:8080/api/auth/signup', requestOptions)
      .then((response) => response)
      .then((json) => {
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
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({
        usernameOrEmail: this.state.usernameOrEmail,
        password: this.state.password,
      }),
    }
    fetch('http://127.0.0.1:8080/api/auth/signin', requestOptionsPost)
      .then((response) => response)
      .then((json) => {
        if (json.status === 200) {
          alert('You are now logged in')
          this.props.appState.logedIn = true
          this.props.appState.username = this.state.usernameOrEmail
        } else if (json.status === 500) {
          alert('Internal Server Error. Try again or contact the support')
        }
        const test = JSON.stringify(this.state)
        alert(test)
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
          <section className="forms-section">
            <div className="forms">
              <div className="form-wrapper is-active">
                <button
                  type="button"
                  className="switcher switcher-login"
                  onClick={this.swap}
                >
                  Login
                  <span className="underline"></span>
                </button>
                <form
                  className="form form-login"
                  onSubmit={this.handleSubmitChangeLogin}
                >
                  <fieldset>
                    <legend>
                      Please, enter your email and password for login.
                    </legend>
                    <div className="input-block">
                      <label for="login-email">E-Mail or Username</label>
                      <input
                        id="login-email"
                        type="text"
                        required
                        value={this.state.usernameOrEmail}
                        onChange={this.handleUsernameOrEmail}
                      />
                    </div>
                    <div className="input-block">
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
                  <button type="submit" className="btn-login">
                    Login
                  </button>
                </form>
              </div>
              <div className="form-wrapper">
                <button type="button" className="switcher switcher-signup">
                  Sign Up
                  <span className="underline"></span>
                </button>
                <form
                  className="form form-signup"
                  onSubmit={this.handleSubmitChangeRegister}
                >
                  <fieldset>
                    <legend>
                      Please, enter your email, username, name and password for
                      sign up.
                    </legend>
                    <div className="input-block">
                      <label for="signup-email">E-Mail</label>
                      <input
                        id="signup-email"
                        type="email"
                        required
                        value={this.state.email}
                        onChange={this.handleEmail}
                      />
                    </div>
                    <div className="input-block">
                      <label for="signup-username">Username</label>
                      <input
                        id="signup-username"
                        type="text"
                        required
                        value={this.state.username}
                        onChange={this.handleUsername}
                      />
                    </div>
                    <div className="input-block">
                      <label for="signup-name">Name</label>
                      <input
                        id="signup-name"
                        type="text"
                        required
                        value={this.state.name}
                        onChange={this.handleName}
                      />
                    </div>
                    <div className="input-block">
                      <label for="signup-password">Password</label>
                      <input
                        id="signup-password"
                        type="password"
                        required
                        value={this.state.password}
                        onChange={this.handlePasswort}
                      />
                    </div>
                    <div className="input-block" onChange={this.handleRole}>
                      <label for="Coach">Coach</label>
                      <input
                        name="select-rank"
                        id="Coach"
                        type="radio"
                        required
                        value="ROLE_COACH"
                      />
                      <label for="Anbieter">Owner</label>
                      <input
                        name="select-rank"
                        id="Anbieter"
                        type="radio"
                        required
                        value="ROLE_OWNER"
                      />
                    </div>
                  </fieldset>
                  <button type="submit" className="btn-signup">
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
