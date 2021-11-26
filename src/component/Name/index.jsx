import React, { Component } from "react";

export default class Name extends Component {
  getName = (event) => {
    const { setAttribute } = this.props;
    setAttribute("names", event.target.value);
  };
  render() {
    const { personObj, names } = this.props;
    return (
      <div className="form-group">
        <label forname="name" className="col-sm-2 control-label">
          姓名
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="姓名"
            onChange={this.getName}
            value={personObj ? personObj.names : names}
          />
        </div>
      </div>
    );
  }
}
