import React, { Component } from "react";
import "./index.css";

export default class Major extends Component {
  getMajor = (event) => {
    const { setAttribute } = this.props;
    setAttribute("major", event.target.value);
  };
  render() {
    const { personObj, major } = this.props;
    return (
      <div className="form-group">
        <label forname="major" className="col-sm-2 control-label">
          专业
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="major"
            onChange={this.getMajor}
            value={personObj ? personObj.major : major}
          />
        </div>
      </div>
    );
  }
}
