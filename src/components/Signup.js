import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../signup/actions";

class Signup extends Component {
  state = {
    email: "",
    name: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.dispatch(
      signUp(this.state.email, this.state.name, this.state.password)
    );
  };

  render() {
    // const mystyle = {
    //   margin: "auto",
    //   width: "50%",
    //   border: "3px solid green",
    //   padding: "10px"
    // };

    if (this.props.data.jwt) {
      return (
        <div>
          <h1>Welcome {this.props.data.name}!</h1>
          <h4>
            Click to go to homepage: <Link to="/">Home</Link>
          </h4>
          {/* <nav>
            Already have an account?
            <br />
            <Link to="/login">Click here to log in!</Link>
          </nav> */}
        </div>
      );
    }
    console.log("props in signup: ", this.props);
    return (
      <div>
        <h1>Signup here!</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              name="email"
              placeholder="E-mail"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <p>
              <input
                name="name"
                placeholder="Username"
                type="text"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </p>
            <p>
              <input
                name="password"
                placeholder="Password"
                type="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </p>
            <input type="submit" />
            <p></p>
          </form>
        </div>
        <div>
          <nav>
            Already have an account?
            <br />
            <Link to="/login">Click here to log in!</Link>
          </nav>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("redux state in signup:", state);
  return {
    data: state.auth
  };
}

export default connect(mapStateToProps)(Signup);
