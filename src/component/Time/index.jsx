import React, { Component } from "react";
import { DatePicker } from "@fluentui/react";
import "./index.css";

export default class Time extends Component {
  getTime = (event) => {
    const { setAttribute } = this.props;
    setAttribute("time", event.target.innerText);
  };
  onFormatDate = (date) => {
    return !date
      ? ""
      : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  };
  render() {
    const { personObj } = this.props;
    return (
      <div className="form-group">
        <label className="col-sm-2 control-label">简历投递时间</label>
        <div className="col-sm-2">
          <DatePicker
            ref={(c) => (this.input = c)}
            placeholder="时间"
            formatDate={this.onFormatDate}
            maxDate={this.maxDate}
            onBlur={this.getTime}
            value={personObj ? new Date(personObj.time) : ""}
          />
        </div>
      </div>
    );
  }
}
