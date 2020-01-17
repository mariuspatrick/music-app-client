import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../signup/actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
    if (this.props.data.jwt) {
      return (
        <div>
          <h1>Welcome {this.props.data.name}!</h1>
          <h4>
            Go to homepage:
            <p></p>
            <Button onClick={() => this.props.history.push("/")}>Home</Button>
          </h4>
        </div>
      );
    }
    return (
      <div>
        <h1>Signup here!</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <TextField
              // autoComplete="off"
              id="signupField"
              name="email"
              label="E-mail"
              variant="outlined"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <p></p>
            <TextField
              id="loginField"
              name="name"
              label="Username"
              variant="outlined"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <p></p>
            <TextField
              id="passwordField"
              type="password"
              name="password"
              label="Password"
              variant="outlined"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <p></p>
            <Button
              variant="contained"
              type="submit"
              //   onClick={() => this.props.history.push("/")}
            >
              Sign Up
            </Button>
          </form>
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
