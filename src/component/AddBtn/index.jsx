import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
export default class AddBtn extends Component {
  handleAdd = () => {
    const { addPerson, personObj } = this.props;
    addPerson(personObj);
  };
  render() {
    return (
      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <NavLink className="btn btn-default" onClick={this.handleAdd} to="/resume">
            创建
          </NavLink>
          &nbsp; &nbsp;
          <NavLink className="btn btn-default" to="/resume">
            取消
          </NavLink>
        </div>
      </div>
    );
  }
}
