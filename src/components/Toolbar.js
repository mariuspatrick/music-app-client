import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLoggedOut } from "../signup/actions";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class Toolbar extends Component {
  render() {
    const mystyle = {
      display: "block",
      color: "darkblue",
      textDecoration: "none"
    };
    return (
      <div>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>
            <Link style={mystyle} to="/login">
              Login
            </Link>
          </Button>
          <Button>
            <Link style={mystyle} to="/signup">
              Signup
            </Link>
          </Button>
          <Button>
            <Link style={mystyle} to="/">
              Home
            </Link>
          </Button>
          <Button
            style={{ alignItems: "left", color: "darkblue" }}
            onClick={() => this.props.dispatch(userLoggedOut())}
          >
            Logout
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default connect()(Toolbar);
