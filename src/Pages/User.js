import React from 'react'

import '../Styles/form.css'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      name: '',
      username: '',
      password: '',

      usernameOrEmail:''
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePasswort = this.handlePasswort.bind(this);
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

  

  handleUsername(event){
    this.setState({username: event.target.value });
  }
  handleName(event){
    this.setState({name : event.target.value });
  }
  handleEmail(event){
    this.setState({email: event.target.value });
  }
  handlePasswort(event){
    this.setState({password: event.target.value });
  }
  handleSubmitChangeRegister(event){
    // IDEA: ALERT FOR WHEN USER IS CREATED SUCCESSFULLY

    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(this.state.email, this.state.name, this.state.username, this.state.password)
    }
    fetch("http://localhost:8080/api/user/signup", requestOptions)
    .then(response => response.json())
    .then(json => {
      var jsonAnsw = JSON.stringify(json);
      alert(jsonAnsw);
    })
    this.resetForm();
  }
  handleSubmitChangeLogin(event){
    const requestOptionsPost =  {
      method:"POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(this.state.email, this.state.username, this.state.password)
    }

    const requestOptionsGet = {
      method:"GET",
      headers:{"Content-Type":"application/json"},
    }

    fetch("http://localhost:8080/api/user/signin", requestOptionsPost)
    .then(response => response)
    .then(json =>{
      var jsonAnsw = JSON.stringify(json);
      if(json.status === 200){
        alert(jsonAnsw);
        fetch("http://localhost:8080/api/user/getByEmail="+this.state.email, requestOptionsGet)
        .then(response => response.json())
        .then(json => {
          this.props.changeState({
            logedIn: true,
            user_is: json.id,
            username: json.username,
            name:json.name,
            email:json.email
          })
        })
      }
    })
  }

  resetForm(){
    this.setState({
      email: '',
      name: '',
      username: '',
      password: ''   
    })
  }
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
