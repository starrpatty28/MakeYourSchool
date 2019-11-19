import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
     return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            MakeYourSchool
          </a>
          <ul className="right">
            <li>
              <a>Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>  
    );
  }
}

function mapStateToProp({ auth }) {
  return { auth };
}

export default connect(mapStateToProp)(Header);