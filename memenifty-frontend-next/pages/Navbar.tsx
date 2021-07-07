import React, { Component } from 'react';

class MainNav extends React.Component{
  render() {
    return(
      <div>
        <nav className="navbar navbar-expand navbar-light fixed-top bg-light flex-md-nowrap p-2 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://reddit.com/r/ethdev"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src='https://styles.redditmedia.com/t5_39dcn/styles/communityIcon_p8az7m00uio61.png?width=256&s=795bbfa68fd69b3eed171e2d6f03daaec65b1d15'
            width="50"
            height="50"
            alt="">
          </img>
            Memenifty
          </a>
          <div className="navbar-expand-lg" id="navbarNav">
            <ul className="navbar-nav mr-auto mx-auto">
              <li className="nav-item">
                  <a className="nav-link text-dark" href="localhost:3000">Home</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}


export default MainNav;
