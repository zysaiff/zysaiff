import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
export default class Item extends Component {
  state = { flag: false };
  hendleMouse = (flag) => {
    return () => {
      this.setState({ flag });
    };
  };
  handleId = () => {
    const { getObjById, id } = this.props;
    getObjById(id);
  };
  handleCheck = (id) => {
    return (event) => {
      this.props.updateChecked(id, event.target.checked);
    };
  };
  handleDelete = (id) => {
    return () => {
      if (window.confirm("你确定要删除吗")) {
        this.props.deletePersonObj(id);
      }
    };
  };
  render() {
    const {
      id,
      names,
      gender,
      time,
      remark,
      phoneNum,
      post,
      website,
      isfresh,
      school,
      major,
      education,
      checked,
    } = this.props;
    const { flag } = this.state;
    return (
      <tr
        onMouseEnter={this.hendleMouse(true)}
        onMouseLeave={this.hendleMouse(false)}
        style={{ backgroundColor: flag ? "rgb(208, 237, 248)" : "#fff" }}
      >
        <td>
          <input
            type="checkbox"
            checked={checked}
            onChange={this.handleCheck(id)}
          />
        </td>
        <td>{names}</td>
        <td>{gender}</td>
        <td>{time}</td>
        <td>{remark}</td>
        <td>{phoneNum}</td>
        <td>{post}</td>
        <td>{website}</td>
        <td>{isfresh}</td>
        <td>{school}</td>
        <td>{major}</td>
        <td>{education}</td>
        <td>
          <NavLink
            className="btn btn-info"
            onClick={this.handleId}
            to="/resume/list/item/edit"
          >
            修改
          </NavLink>
          &nbsp;
          <button className="btn btn-danger" onClick={this.handleDelete(id)}>
            删除
          </button>
        </td>
      </tr>
    );
  }
}
