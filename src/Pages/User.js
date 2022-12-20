import React from 'react'

import '../Styles/form.css'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logedIn: false,
      user_id: '',
      username: '',
      rank: 'COACH',
    }
  }

  componentDidMount() {
    this.setState({
      id: this.props.appState.user_id,
      username: this.props.appState.name,
      rank: this.props.appState.rank,
    })
    this.swap();


    /**
     * Element to be changed come here ("titles", "rank-text" etc.)
     */
  }

  /**
   * LOGIN/SIGNUP FORM IN THIS RETURN METHOD
   * Prefferably with a login fom
   */

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
    if (this.state.logedIn === true) {
      return (
        <>
          <h1>Welcome back {this.state.username}</h1>
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
                <form class="form form-login">
                  <fieldset>
                    <legend>
                      Please, enter your email and password for login.
                    </legend>
                    <div class="input-block">
                      <label for="login-email">E-Mail or Username</label>
                      <input id="login-email" type="email" required />
                    </div>
                    <div class="input-block">
                      <label for="login-password">Password</label>
                      <input id="login-password" type="password" required />
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
                <form class="form form-signup">
                  <fieldset>
                    <legend>
                      Please, enter your email, password and password
                      confirmation for sign up.
                    </legend>
                    <div class="input-block">
                      <label for="signup-email">E-Mail</label>
                      <input id="signup-email" type="email" required />
                    </div>
                    <div class="input-block">
                      <label for="signup-username">Username</label>
                      <input id="signup-username" type="text" required />
                    </div>
                    <div class="input-block">
                      <label for="signup-name">Name</label>
                      <input id="signup-name" type="text" required />
                    </div>
                    <div class="input-block">
                      <label for="signup-password">Password</label>
                      <input id="signup-password" type="password" required />
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
