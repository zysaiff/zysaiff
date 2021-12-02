import * as React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
interface Props {
  filterPerson: Function;
  personObj: any;
}
export default class FilterBtn extends React.Component<Props> {
  handleFilter = () => {
    const { filterPerson, personObj } = this.props;
    filterPerson(personObj);
  };
  render() {
    return (
      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <NavLink
            className="btn btn-default"
            onClick={this.handleFilter}
            to="/resume"
          >
            过滤
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
