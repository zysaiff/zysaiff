import React, { Component } from "react";
import "./index.css";

export default class Post extends Component {
  state = { postOption: ["全部", "Developer", "QA", "BA", "Support"] };
  getPost = (event) => {
    const { setAttribute } = this.props;
    setAttribute("post", event.target.value);
  };
  render() {
    const { postOption } = this.state;
    const { personObj, post } = this.props;
    return (
      <div className="form-group">
        <label forname="post" className="col-sm-2 control-label">
          应聘岗位
        </label>
        <div className="col-sm-2">
          <select
            className="form-control"
            id="post"
            onChange={this.getPost}
            value={personObj ? personObj.post : post}
          >
            {postOption.map((g, index) => {
              return <option key={index}>{g}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}
