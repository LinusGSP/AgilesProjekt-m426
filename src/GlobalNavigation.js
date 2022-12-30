import logo from './Styles/Images/Logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

import './Styles/navBar.css'

class GlobalNavigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <nav className='top'>
            <div class="menu">
                <img src={logo} className="log-img"></img>
                <div class="menu_links">
                    <a href="/" class="link">Home</a>
                    <a href="/ProjectList" class="link">Projects</a>
                    <a href="/User" class="link">User</a>
                </div>
                <div class="menu_icon" onClick={""}>
                    <span class="icon"></span>
                </div>
            </div>
            </nav>
      </>
    )
  }
}
export default GlobalNavigation
