import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Still deciding';
      case false:
        return 'I am logged Out!';
      default:
        return 'Yassss I am logged in!'
    }
  }

  render() {
     return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            MakeYourSchool
          </a>
          <ul className="right">
            {this.renderContent()}
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