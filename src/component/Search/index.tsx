import * as React from "react";
import "./index.css";

interface Props {
  getObjByname: Function;
}
export default class Search extends React.Component<Props> {
  name: any = React.createRef();
  handleSearch = () => {
    this.props.getObjByname(this.name.current.value);
  };
  render() {
    return (
      <div className="col-sm-4">
        <div className="input-group">
          <input
            ref={this.name}
            type="text"
            className="form-control"
            placeholder="请输入姓名"
          />
          <span className="input-group-btn">
            <button
              className="btn btn-default"
              type="button"
              onClick={this.handleSearch}
            >
              搜索
            </button>
          </span>
        </div>
      </div>
    );
  }
}
