import logo from './images/logo.svg'
import './Styles/App.css'
import { Routes, Route, Outlet, BrowserRouter } from 'react-router-dom'
import React from 'react'

import Home from './Pages/Home'
import Layout from './Layout'
import ProjectList from './Pages/ProjectList'
import NotFound from './Pages/NotFound'
import User from './Pages/User'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logedIn : false,
      user_id: "",
      username: "",
      rank: "COACH"
    }
    this.changeState = this.changeState.bind(this);
  }

  changeState(x){
    this.setState({...x})
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/ProjectList" element={<ProjectList appState={this.state}/>} />
              <Route path="/User" element={<User appState={this.state} changeState={this.changeState}/>}/>
              <Route path="/" />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
export default App
