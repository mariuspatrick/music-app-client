import React, { Component } from "react";
import { connect } from "react-redux";

class Checkbox extends Component {
  state = {
    isChecked: false
  };

  toggleCheckboxChange = () => {
    // console.log("this has been checked", this.state);
    // const id = this.props;
    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
      // idChecked: this.props.
    }));
    // if (this.state.isChecked) {
    //   this.setState({
    //     idChecked: this.props.checkbox.items.map(track => {
    //       return track.id;
    //     })
    //   });
    // }
  };

  getTrackId = track => {
    return track.track.id;
  };

  render() {
    const { id } = this.props.checkbox.items;
    const { isChecked } = this.state;

    // console.log("checkbox id: ", id);

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={id}
            checked={isChecked}
            // onClick={() =>
            //   console.log("this is track's id: ", this.track.track.id)
            // }
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
  // console.log("reduxState in checkbox: ", state);
  return {
    checkbox: state.tracks
  };
}

export default connect(mapStateToProps)(Checkbox);
