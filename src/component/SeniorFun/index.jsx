import React, { Component } from "react";
import Search from "../Search";
import Fun from "../Fun";
import "./index.css";
export default class SeniorFun extends Component {
  render() {
    const { claerAllChecked, getObjByname } = this.props;
    return (
      <div className="seniorfun">
        <div className="row">
          <Fun claerAllChecked={claerAllChecked} />
          <Search getObjByname={getObjByname} />
        </div>
      </div>
    );
  }
}
