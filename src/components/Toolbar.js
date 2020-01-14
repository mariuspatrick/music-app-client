import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Toolbar extends Component {
  render() {
    return (
      <div>
        <Link to="/login">Login</Link>
        <p></p>
        <Link to="/signup">Signup</Link>
        <p></p>
      </div>
    );
  }
}

export default connect()(Toolbar);
