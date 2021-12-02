import * as React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
interface Props {
  addPerson: Function;
  person: any;
}
export default class AddBtn extends React.Component<Props> {
  handleAdd = () => {
    const { addPerson, person } = this.props;
    addPerson(person);
  };
  render() {
    return (
      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <NavLink
            className="btn btn-default"
            onClick={this.handleAdd}
            to="/resume"
          >
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
