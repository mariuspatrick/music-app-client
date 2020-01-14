import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLoggedOut } from "../signup/actions";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class Toolbar extends Component {
  render() {
    console.log("this.props.history in toolbar", this.props);
    return (
      <div>
        {/* <button>
          <Link to="/login">Login</Link>
        </button>
        <p></p>
        <button>
          <Link to="/signup">Signup</Link>
        </button>
        <p></p>
        <button onClick={() => this.props.dispatch(userLoggedOut())}>
          Logout
        </button> */}
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>
            {/* onClick={() => this.props.history.push("/login")} */}
            <Link to="/login">Login</Link>
          </Button>
          <Button onClick={() => this.props.dispatch(userLoggedOut())}>
            Logout
          </Button>
          <Button>
            <Link to="/signup">Signup</Link>
          </Button>
          <Button>
            <Link to="/">Home</Link>
          </Button>
        </ButtonGroup>
        {/* <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup> */}
      </div>
    );
  }
}

export default connect()(Toolbar);
