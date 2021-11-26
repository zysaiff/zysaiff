import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
export default class EditBtn extends Component {
  edit = () => {
    const { editPerson, personObj } = this.props;
    editPerson(personObj);
  };
  render() {
    return (
      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <NavLink className="btn btn-default" onClick={this.edit} to="/resume">
            保存
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
