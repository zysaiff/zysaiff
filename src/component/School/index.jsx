import React, { Component } from "react";
import "./index.css";

export default class School extends Component {
  getSchool = (event) => {
    const { setAttribute } = this.props;
    setAttribute("school", event.target.value);
  };
  render() {
    return (
      <div className="form-group">
        <label forname="school" className="col-sm-2 control-label">
          毕业院校
        </label>
        <div className="col-sm-5">
          <input
            type="email"
            className="form-control"
            id="school"
            onChange={this.getSchool}
          />
        </div>
      </div>
    );
  }
}
