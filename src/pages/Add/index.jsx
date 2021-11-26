import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./index.css";
import AddTitle from "../../component/AddTitle";
import Time from "../../component/Time";
import Name from "../../component/Name";
import Telephone from "../../component/Telephone";
import Gender from "../../component/Gender";
import Fresh from "../../component/Fresh";
import School from "../../component/School";
import Education from "../../component/Education";
import Major from "../../component/Major";
import Post from "../../component/Post";
import Website from "../../component/Website";
import Remark from "../../component/Remark";
import Resume from "../../component/Resume";
import AddBtn from "../../component/AddBtn";
export default class Add extends Component {
  state = {
    personObj: {
      id: nanoid(),
      names: "",
      time: "",
      remark: "",
      phoneNum: "",
      gender: "",
      post: "",
      website: "",
      isfresh: "",
      school: "",
      major: "",
      education: "",
    },
  };
  setAttribute = (key, value) => {
    const { personObj } = this.state;
    this.setState({ personObj: { ...personObj, [key]: value } });
  };
  render() {
    const { addPerson } = this.props;
    const { personObj } = this.state;
    return (
      <div className="form-horizontal col-md-offset-3">
        <AddTitle />
        <Time setAttribute={this.setAttribute} />
        <Name setAttribute={this.setAttribute} names={personObj.names} />
        <Telephone setAttribute={this.setAttribute} phoneNum={personObj.phoneNum} />
        <Gender setAttribute={this.setAttribute} gender={personObj.gender} />
        <Fresh setAttribute={this.setAttribute} isfresh={personObj.isfresh} />
        <School setAttribute={this.setAttribute} />
        <Major setAttribute={this.setAttribute} major={personObj.major} />
        <Education setAttribute={this.setAttribute} education={personObj.education} />
        <Post setAttribute={this.setAttribute} post={personObj.post} />
        <Website setAttribute={this.setAttribute} website={personObj.website} />
        <Remark setAttribute={this.setAttribute} remark={personObj.remark} />
        <Resume />
        <AddBtn addPerson={addPerson} personObj={personObj} />
      </div>
    );
  }
}
