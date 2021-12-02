import * as React from "react";
import Search from "../Search";
import Fun from "../Fun";
import "./index.css";
interface Props {
  claerAllChecked: Function;
  getObjByname: Function;
}
export default class SeniorFun extends React.Component<Props> {
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
