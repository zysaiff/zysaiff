import * as React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
interface Props {
  id: string;
  name: string;
  gender: string;
  time: string;
  remark: string;
  phoneNum: string;
  post: string;
  website: string;
  isfresh: string;
  school: string;
  major: string;
  education: string;
  checked: boolean;
  getObjById: Function;
  updateChecked: Function;
  deletePersonObj: Function;
}
interface State {
  flag: boolean;
}
export default class Item extends React.Component<Props, State> {
  state: State = { flag: false };
  hendleMouse = (flag: boolean) => {
    return () => {
      this.setState({ flag });
    };
  };
  //获得一个对象,用于编辑页面的回显
  handleId = () => {
    const { getObjById, id } = this.props;
    getObjById(id);
  };
  //更新对象的checked
  handleCheck = (id: string) => {
    return (event: any) => {
      this.props.updateChecked(id, event.target.checked);
    };
  };
  handleDelete = (id: string) => {
    return () => {
      if (window.confirm("你确定要删除吗")) {
        this.props.deletePersonObj(id);
      }
    };
  };
  render() {
    const {
      id,
      name,
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
        <td>{name}</td>
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
            to="/resume/table/item/edit"
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
