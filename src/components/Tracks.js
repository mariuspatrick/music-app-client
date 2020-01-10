import React, { Component } from "react";
import { connect } from "react-redux";

class Tracks extends Component {
  componentDidMount() {}
  render() {
    return <div>Ahoy Matey! I am a pirate aarghh! Wooden leg pirate stuff</div>;
  }
}

export default connect()(Tracks);
