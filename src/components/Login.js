import React from "react";
import { connect } from "react-redux";
import { login } from "../signup/actions";
import { Link } from "react-router-dom";

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
    // const mystyle = {
    //   margin: "auto",
    //   width: "50%",
    //   border: "3px solid green",
    //   padding: "10px"
    // };
    // console.log("these are props in login: ", this.props);
    if (this.props.data.jwt && this.props.data.id) {
      return (
        <div>
          {localStorage.setItem("jwt", this.props.data.jwt)}
          <h1>Hello {this.props.data.name} </h1>
          <h3>You have succesfully logged in!</h3>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </div>
      );
    }
    return (
      <div>
        <h1>Login here!</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
        <div>
          <nav>
            {/* Don't have an account? */}
            <br />
          </nav>
        </div>
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
