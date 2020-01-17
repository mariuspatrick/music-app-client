import React from "react";
import { connect } from "react-redux";
import { login } from "../signup/actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class LoginPage extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("this.props.data.jwt in login:", this.props.data);
    this.props.dispatch(login(this.state.email, this.state.password));
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.props.data.jwt && this.props.data.id) {
      return (
        <div>
          {localStorage.setItem("jwt", this.props.data.jwt)}
          <h1>Hello {this.props.data.name} </h1>
          <h3>You have succesfully logged in!</h3>
          <nav>
            <Button onClick={() => this.props.history.push("/")}>Home</Button>
          </nav>
        </div>
      );
    }
    return (
      <div>
        <h1>Login here!</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <TextField
              id="email-text"
              name="email"
              label="E-mail"
              variant="outlined"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </p>
          <TextField
            id="password-text"
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <p>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </p>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("redux state in logn: ", state.auth);
  return {
    data: state.auth
  };
}
export default connect(mapStateToProps)(LoginPage);
