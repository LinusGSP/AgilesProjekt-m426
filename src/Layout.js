import { Outlet } from 'react-router-dom'
import React from 'react'

import './Styles/Layout.css'

import GlobalNavigation from './GlobalNavigation'

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <div className="App">
            <GlobalNavigation />
          <div className="content">
            <header className="App-header">
              <Outlet />
            </header>
          </div>
          <hr/>
          <footer className="App-Footer">
            <a className="footer_text">Group 3</a>
            <a className='footer-text'>Linus, Lukas, Linus, Martin</a>
          </footer>
        </div>
      </>
    )
  }
}
