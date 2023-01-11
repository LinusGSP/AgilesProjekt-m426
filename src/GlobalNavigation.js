import logo from './Styles/Images/Logo.png'
import React from 'react'

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
            <div className="menu">
                <img src={logo} alt="logo_image" className="log-img"></img>
                <div className="menu_links">
                    <a href="/" className="link">Home</a>
                    <a href="/ProjectList" className="link">Projects</a>
                    <a href="/User" className="link">User</a>
                </div>
                <div className="menu_icon" onClick={""}>
                    <span className="icon"></span>
                </div>
            </div>
            </nav>
      </>
    )
  }
}
export default GlobalNavigation
