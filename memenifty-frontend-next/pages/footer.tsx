import React, { Component } from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark fixed-bottom bg-dark flex-md-nowrap p-3 border border-secondary rounded-top">
          <ul class="d-flex mx-auto my-auto">
                <li class="nav-item p-3 d-flex">
                  <a href="https://discord.gg/48ChbnEa">
                  <img src='https://image.flaticon.com/icons/png/512/3670/3670157.png'
                  width="35"
                  height="35"
                  alt=""
                  href="https://discord.gg/48ChbnEa">
                  </img>
                  </a>
                </li>
                <li class="nav-item p-3 d-flex">
                  <a href="https://github.com/r-ethdev/memenifty">
                  <img src='https://i.imgur.com/BoWqPu1.png'
                  width="35"
                  height="35"
                  alt="">
                  </img>
                  </a>
                </li>
                <li class="nav-item p-3 d-flex">
                  <a href="https://www.reddit.com/r/ethdev">
                  <img src='https://image.flaticon.com/icons/png/512/1409/1409938.png'
                  width="35"
                  height="35"
                  alt="">
                  </img>
                  </a>
                </li>
            </ul>
          </nav>
        </div>
    )
  }
}



export default Footer;
