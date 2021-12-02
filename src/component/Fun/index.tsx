import * as React from "react";
import { NavLink } from "react-router-dom";
interface Props {
  claerAllChecked: Function;
}
export default class Fun extends React.Component<Props> {
  handleDelete = () => {
    if (window.confirm("你确定要删除选中的对象吗")) {
      this.props.claerAllChecked();
    }
  };
  render() {
    return (
      <div className="col-md-8">
        <div className="col-sm-1">
          <NavLink className="btn btn-success" to="/resume/add">
            添加
          </NavLink>
        </div>
        <div className="col-sm-1">
          <NavLink className="btn btn-success" to="/resume/filter">
            过滤
          </NavLink>
        </div>
        <div className="col-sm-1">
          <button className="btn btn-danger" onClick={this.handleDelete}>
            删除选中
          </button>
        </div>
      </div>
    );
  }
}
