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
export default class App extends React.Component {
  state = {
    datas: [], //存储从json文件中获取的数据
    person: {}, //用于回显的对象
  };
  //请求数据
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
  addPerson = (personObj: any) => {
    const { datas } = this.state;
    const newDatas = [personObj, ...datas];
    this.setState({ datas: newDatas });
  };
  //编辑更新person信息
  editPerson = (personObj: any) => {
    const { datas } = this.state;
    const newDatas = datas.map((dataObj: any) => {
      if (personObj.id === dataObj.id) return personObj;
      else return dataObj;
    });
    this.setState({ datas: newDatas });
  };
  //更新cheched
  updateChecked = (id: string, checked: boolean) => {
    const { datas } = this.state;
    const newDatas = datas.map((personObj: any) => {
      if (id === personObj.id) return { ...personObj, checked };
      else return personObj;
    });
    this.setState({ datas: newDatas });
  };
  //删除
  deletePersonObj = (id: string) => {
    const { datas } = this.state;
    const newDatas = datas.filter((personObj: any) => {
      return personObj.id !== id;
    });
    this.setState({ datas: newDatas });
  };
  //全部选中或取消全部选中
  checkedAll = (checked: boolean) => {
    const { datas } = this.state;
    const newDatas = datas.map((personObj: any) => {
      return { ...personObj, checked };
    });
    this.setState({ datas: newDatas });
  };
  //删除所有选中
  claerAllChecked = () => {
    const { datas } = this.state;
    const newDatas = datas.filter((personObj: any) => {
      return personObj.checked === false;
    });
    this.setState({ datas: newDatas });
  };
  //过滤
  filterPerson = (personObj: any) => {
    const { datas } = this.state;
    const newDatas = datas.filter((p: any) => {
      return (
        (personObj.startTime === "" ? true : new Date(personObj.startTime) < new Date(p.time)) &&
        (personObj.endTime === "" ? true : new Date(personObj.endTime) > new Date(p.time)) &&
        (personObj.gender === "" || personObj.gender === "全部" ? true : personObj.gender === p.gender) &&
        (personObj.isfresh === "" || personObj.isfresh === "全部" ? true : personObj.isfresh === p.isfresh) &&
        (personObj.education === "" || personObj.education === "全部" ? true : personObj.education === p.education) &&
        (personObj.major === "" ? true : personObj.major === p.major) &&
        (personObj.post === "" || personObj.post === "全部" ? true : personObj.post === p.post) &&
        (personObj.website === "" ? true : personObj.website === p.website)
      );
    });
    this.setState({ datas: newDatas });
  };
  //通过姓名获取datas中的对象
  getObjByname = (name: string) => {
    const { datas } = this.state;
    const newDatas = datas.filter((f: any) => {
      return name === f.name;
    });
    this.setState({ datas: newDatas });
  };
  //通过id获取datas中的对象
  getObjById = (id: string) => {
    const { datas } = this.state;
    const personObj = datas.filter((f: any) => {
      return id === f.id;
    });
    this.setState({ person: personObj[0] });
  };
  //升序
  sortUp = () => {
    const { datas } = this.state;
    const newDatas = datas.sort((a: any, b: any) => {
      return (
        new Date(a.time).getTime() - new Date(b.time).getTime()
      );
    });
    this.setState({ datas: newDatas });
  };
  //降序
  sortDown = () => {
    const { datas } = this.state;
    const newDatas = datas.sort((a: any, b: any) => {
      return (
        new Date(b.time).getTime() - new Date(a.time).getTime()
      );
    });
    this.setState({ datas: newDatas });
  };
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
                  sortDown={this.sortDown}
                />
              }
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
                />
              }
            />
            <Route path="/employee" element={<Employee />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/checking" element={<Checking />} />
            <Route path="/resume/add" element={<Add addPerson={this.addPerson} />} />
            <Route path="/resume/table/item/edit" element={<Edit editPerson={this.editPerson} person={person} />} />
            <Route path="/resume/filter" element={<Filter filterPerson={this.filterPerson} />} />
          </Routes>
        </div>
      </div>
    );
  }
}
//暴露App组件
