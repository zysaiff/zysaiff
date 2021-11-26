import React, { Component } from "react";
import "./index.css";

export default class Resume extends Component {
  render() {
    return (
      <div className="form-group">
        <label forname="resume" className="col-sm-2 control-label">
          简历
        </label>
        <div className="col-sm-5">
          <input type="file" id="resume" />
        </div>
      </div>
    );
  }
}
