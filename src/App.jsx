//创建外壳组件
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Resume from "./pages/Resume";
import Employee from "./pages/Employee";
import Apply from "./pages/Apply";
import Checking from "./pages/Checking";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Filter from "./pages/Filter";
import "./app.css";

//创建并暴露App组件
export default class App extends React.Component {
  state = {
    datas: [],
    person: {},
  };

  //获取json数据
  componentDidMount() {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          datas: data.arr,
        });
      })
      .catch((e) => {
        console.log("error");
      });
  }
  //添加
  addPerson = (personObj) => {
    const { datas } = this.state;
    const newDatas = [personObj, ...datas];
    this.setState({ datas: newDatas });
  };
  //编辑更新person信息
  editPerson = (personObj) => {
    const { datas } = this.state;
    const newDatas = datas.map((dataObj) => {
      if (personObj.id === dataObj.id) return personObj;
      else return dataObj;
    });
    this.setState({ datas: newDatas });
  };
  //更新cheched
  updateChecked = (id, checked) => {
    const { datas } = this.state;
    const newDatas = datas.map((personObj) => {
      if (id === personObj.id) return { ...personObj, checked };
      else return personObj;
    });
    this.setState({ datas: newDatas });
  };
  //删除
  deletePersonObj = (id) => {
    const { datas } = this.state;
    const newDatas = datas.filter((personObj) => {
      return personObj.id !== id;
    });
    this.setState({ datas: newDatas });
  };
  //全部选中或取消全部选中
  checkedAll = (checked) => {
    const { datas } = this.state;
    const newDatas = datas.map((personObj) => {
      return { ...personObj, checked };
    });
    this.setState({ datas: newDatas });
  };
  //删除所有选中
  claerAllChecked = () => {
    const { datas } = this.state;
    const newDatas = datas.filter((personObj) => {
      return personObj.checked === false;
    });
    this.setState({ datas: newDatas });
  };
  //过滤
  filterPerson = (personObj) => {
    const { datas } = this.state;
    const newDatas = datas.filter((p) => {
      return (
        /* Object.keys(personObj).map((key)=>{
          return p[key] === personObj[key];
        })*/
        (personObj.startTime === ""
          ? true
          : new Date(personObj.startTime) < new Date(p.time)) &&
        (personObj.endTime === ""
          ? true
          : new Date(personObj.endTime) > new Date(p.time)) &&
        (personObj.gender === "" || personObj.gender === "全部"
          ? true
          : personObj.gender === p.gender) &&
        (personObj.isfresh === "" || personObj.isfresh === "全部"
          ? true
          : personObj.isfresh === p.isfresh) &&
        (personObj.education === "" || personObj.education === "全部"
          ? true
          : personObj.education === p.education) &&
        (personObj.major === "" ? true : personObj.major === p.major) &&
        (personObj.post === "" || personObj.post === "全部"
          ? true
          : personObj.post === p.post) &&
        (personObj.website === "" ? true : personObj.website === p.website)
      );
    });
    this.setState({ datas: newDatas });
  };
  //通过姓名获取datas中的对象
  getObjByname = (names) => {
    const { datas } = this.state;
    const newDatas = datas.filter((f) => {
      return names === f.names;
    });
    this.setState({ datas: newDatas });
  };
  //通过id获取datas中的对象
  getObjById = (id) => {
    const { datas } = this.state;
    const personObj = datas.filter((f) => {
      return id === f.id;
    });
    this.setState({ person: personObj[0] });
  };
  //升序
  sortUp = () => {
    const { datas } = this.state;
    const newDatas = datas.sort((a,b)=>{return new Date(a.time)-new Date(b.time)})
    this.setState({ datas: newDatas });
  }
  //升序
  sortDown = () => {
    const { datas } = this.state;
    const newDatas = datas.sort((a,b)=>{return new Date(b.time)-new Date(a.time)})
    this.setState({ datas: newDatas });
  }
  render() {
    const { datas, person } = this.state;
    return (
      <div className="hr-container">
        <div className="hr-wrap">
          <Routes>
            <Route
              path="/"
              element={
                <Resume
                  datas={datas}
                  getObjById={this.getObjById}
                  updateChecked={this.updateChecked}
                  deletePersonObj={this.deletePersonObj}
                  checkedAll={this.checkedAll}
                  claerAllChecked={this.claerAllChecked}
                  getObjByname={this.getObjByname}
                  sortUp={this.sortUp}
                  sortUp={this.sortDown}
                  setDatas={this.setDatas}
                />
              }
              exact
            />
            <Route
              path="/resume"
              element={
                <Resume
                  datas={datas}
                  getObjById={this.getObjById}
                  updateChecked={this.updateChecked}
                  deletePersonObj={this.deletePersonObj}
                  checkedAll={this.checkedAll}
                  claerAllChecked={this.claerAllChecked}
                  getObjByname={this.getObjByname}
                  sortUp={this.sortUp}
                  sortDown={this.sortDown}
                  setDatas={this.setDatas}
                />
              }
            />
            <Route path="/employee" element={<Employee />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/checking" element={<Checking />} />
            <Route
              path="/resume/add"
              element={<Add addPerson={this.addPerson} />}
            />
            <Route
              path="/resume/list/item/edit"
              element={<Edit editPerson={this.editPerson} person={person} />}
            />
            <Route
              path="/resume/filter"
              element={<Filter filterPerson={this.filterPerson} />}
            />
          </Routes>
        </div>
      </div>
    );
  }
}
//暴露App组件
