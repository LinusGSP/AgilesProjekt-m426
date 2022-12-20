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
                <p class="website_name">LOGO</p>
                <div class="menu_links">
                    <a href="/" class="link">Home</a>
                    <a href="/ProjectList" class="link">Projects</a>
                    <a href="/User" class="link">User</a>
                    <a href="/about" class="link">About</a>
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
