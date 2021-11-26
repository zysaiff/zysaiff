import React, { Component } from "react";
import FilterTitle from "../../component/FilterTitle";
import FilterTime from "../../component/FilterTime";
import Gender from "../../component/Gender";
import Fresh from "../../component/Fresh";
import Education from "../../component/Education";
import Major from "../../component/Major";
import Post from "../../component/Post";
import Website from "../../component/Website";
import FilterBtn from "../../component/FilterBtn";
import "./index.css";
export default class Filter extends Component {
  state = {
    personObj: {
      startTime:"",
      endTime:"",
      gender:"",
      isfresh: "",
      education: "",
      major: "",
      post: "",
      website: ""
    },
  };
  setAttribute = (key, value) => {
    const { personObj } = this.state;
    const newPersonObj = { ...personObj, [key]: value };
    this.setState({ personObj: newPersonObj });
  };
  render() {
    const { filterPerson } = this.props;
    const { personObj } = this.state;
    return (
      <div className="form-horizontal col-md-offset-3">
        <FilterTitle />
        <FilterTime setAttribute={this.setAttribute}  />
        <Gender setAttribute={this.setAttribute} />
        <Fresh setAttribute={this.setAttribute} />
        <Education setAttribute={this.setAttribute} />
        <Major setAttribute={this.setAttribute} />
        <Post setAttribute={this.setAttribute} />
        <Website setAttribute={this.setAttribute} />
        <FilterBtn filterPerson={filterPerson} personObj={personObj}  />
      </div>
    );
  }
}
