import React, { Component } from "react";
import { connect } from "react-redux";

class Checkbox extends Component {
  state = {
    isChecked: false
  };

  toggleCheckboxChange = () => {
    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }));
  };

  getTrackId = track => {
    return track.track.id;
  };

  render() {
    const { id } = this.props.checkbox.items;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
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
