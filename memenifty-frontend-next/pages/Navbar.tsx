import React, { Component } from 'react';

class MainNav extends React.Component{
  render() {
    return(
      <div>
        <nav className="navbar navbar-expand navbar-light fixed-top bg-light flex-md-nowrap p-2 shadow d-flex flex-column">
          <a
            className="navbar-brand mx-end my-auto flex-d"
            href="https://reddit.com/r/ethdev"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src='https://styles.redditmedia.com/t5_39dcn/styles/communityIcon_p8az7m00uio61.png?width=256&s=795bbfa68fd69b3eed171e2d6f03daaec65b1d15'
            width="50"
            height="50"
            alt=""
            class="mx-end my-auto flex-d">
          </img>
            Memenifty
          </a>
          <ui className="nav-item d-flex flex-row justify-content-center">
              <a className="nav-link text-dark" href="localhost:3000">Home</a>
              <a className="nav-link text-dark" href="localhost:3000">Memes</a>
              <a className="nav-link text-dark" href="localhost:3000">Minting</a>
          </ui>
        </nav>
      </div>
    )
  }
}


export default MainNav;
