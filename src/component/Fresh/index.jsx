import React, { Component } from "react";
import "./index.css";

export default class Fresh extends Component {
  state = { fresh: ["全部", "是", "否"] };
  getFresh = (event) => {
    const { setAttribute } = this.props;
    setAttribute("isfresh", event.target.value);
  };
  render() {
    const { fresh } = this.state;
    const { personObj, isfresh } = this.props;
    return (
      <div className="form-group">
        <label forname="fresh" className="col-sm-2 control-label">
          应届生
        </label>
        <div className="col-sm-2">
          <select
            className="form-control"
            id="fresh"
            onChange={this.getFresh}
            value={personObj ? personObj.isfresh : isfresh}
          >
            {fresh.map((g, index) => {
              return <option key={index}>{g}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}
