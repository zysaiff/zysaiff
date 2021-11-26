import React, { Component } from "react";
import Header from "../../component/Header";
import SeniorFun from "../../component/SeniorFun";
import List from "../../component/List";
import Footer from "../../component/Footer";
export default class Resume extends Component {
  state = {
    newDatas: [], //储存新数据
    currentList: [], //当前显示数据
    pageSize: 10, //每页显示10条
    totalPage: 0, //总页数
    pagenum: 1, //当前页码
  };
  //根据页码设置内容
  setPage = (num) => {
    this.setState({
      currentList: this.state.newDatas.slice(
        (num - 1) * this.state.pageSize,
        num * this.state.pageSize
      ),
    });
  };
  //向上翻页
  setUp = () => {
    this.setState(
      {
        pagenum: parseInt(this.state.pagenum) - 1,
      },
      function () {
        this.setPage(this.state.pagenum);
      }
    );
  };
  //向下翻页
  setDown = () => {
    this.setState(
      {
        pagenum: parseInt(this.state.pagenum) + 1,
      },
      function () {
        this.setPage(this.state.pagenum);
      }
    );
  };
  //页码跳转
  jumpPage = (num) => {
    this.setState(
      {
        pagenum: num,
      },
      function () {
        this.setPage(this.state.pagenum);
      }
    );
  };
  //当组件接收到的数据发生更新时,组件同步更新
  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        newDatas: nextProps.datas,
        totalPage: Math.ceil(nextProps.datas.length / this.state.pageSize),
      },
      function () {
        this.setPage(this.state.pagenum);
      }
    );
  }
  //初始化
  componentDidMount() {
    this.setState(
      {
        newDatas: this.props.datas,
        totalPage: Math.ceil(this.props.datas.length / this.state.pageSize),
      },
      function () {
        this.setPage(1); //初始化第一页数据
      }
    );
  }
  render() {
    const {
      getObjById,
      updateChecked,
      deletePersonObj,
      checkedAll,
      claerAllChecked,
      getObjByname,
      sortUp,
      sortDown,
    } = this.props;
    const { newDatas, currentList, pageSize, totalPage, pagenum } = this.state;
    return (
      <div>
        <Header />
        <SeniorFun
          claerAllChecked={claerAllChecked}
          getObjByname={getObjByname}
        />
        <List
          newDatas={newDatas}
          currentList={currentList}
          getObjById={getObjById}
          updateChecked={updateChecked}
          deletePersonObj={deletePersonObj}
          checkedAll={checkedAll}
        />
        <Footer
          setPage={this.setPage}
          setUp={this.setUp}
          setDown={this.setDown}
          jumpPage={this.jumpPage}
          sortUp={sortUp}
          sortDown={sortDown}
          pageSize={pageSize}
          totalPage={totalPage}
          pagenum={pagenum}
        />
      </div>
    );
  }
}
