import * as React from "react";
import Logo from "./img/logo.png";
import "./index.css";
import { NavLink } from "react-router-dom";
export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="row header-container">
          <div className="col-sm-2">
            <div className="row">
              <div className="col-sm-9">
                <img src={Logo} className="img-rounded header-img" alt="logo" />
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="row header-btn">
              <div className="col-sm-3">
                <NavLink
                  className="btn btn-primary"
                  active="active"
                  to="/resume"
                >
                  简历筛选
                </NavLink>
              </div>
              <div className="col-sm-3">
                <NavLink
                  className="btn btn-primary"
                  active="active"
                  to="/apply"
                >
                  应聘管理
                </NavLink>
              </div>
              <div className="col-sm-3">
                <NavLink
                  className="btn btn-primary"
                  active="active"
                  to="/employee"
                >
                  员工评估
                </NavLink>
              </div>
              <div className="col-sm-3">
                <NavLink
                  className="btn btn-primary"
                  active="active"
                  to="/checking "
                >
                  考勤管理
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
