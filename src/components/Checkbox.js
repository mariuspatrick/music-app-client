import React, { Component } from "react";
import { connect } from "react-redux";

class Checkbox extends Component {
  state = {
    isChecked: false
  };

  toggleCheckboxChange = () => {
    console.log("we are here");
    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }));
  };

  getTrackId = track => {
    const id = track.track.id;
    if (id === track.track.id) return track.track.id;
  };

  render() {
    const { id } = this.props.checkbox.items;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
            style={{
              webkitTransform: "scale(2)",
              transform: "scale(2)",
              padding: "10px"
            }}
            type="checkbox"
            value={id}
            checked={isChecked}
            onClick={this.props.getTrackId}
            onChange={this.toggleCheckboxChange}
          />

          {id}
        </label>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    checkbox: state.tracks
  };
}

export default connect(mapStateToProps)(Checkbox);
