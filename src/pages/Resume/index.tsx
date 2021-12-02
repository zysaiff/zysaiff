import * as React from "react";
import Header from "../../component/Header";
import SeniorFun from "../../component/SeniorFun";
import Table from "../../component/Table";
import Footer from "../../component/Footer";
interface Props {
  datas: Array<any>;
  getObjById: Function;
  updateChecked: Function;
  deletePersonObj: Function;
  checkedAll: Function;
  claerAllChecked: Function;
  getObjByname: Function;
  sortUp: Function;
  sortDown: Function;
}
interface State {
  newDatas: Array<any>;
  currentTable: Array<any>;
  pageSize: number;
  totalPage: number;
  pagenum: number;
}
export default class Resume extends React.Component<Props, State> {
  state: State = {
    newDatas: [], //储存新数据
    currentTable: [], //当前显示数据
    pageSize: 10, //每页显示10条
    totalPage: 0, //总页数
    pagenum: 1, //当前页码
  };
  //根据页码设置内容
  setPage = (num: number) => {
    this.setState({
      currentTable: this.state.newDatas.slice( (num - 1) * this.state.pageSize, num * this.state.pageSize ),
    });
  };
  //向上翻页
  setUp = () => {
    this.setState(
      {
        pagenum: this.state.pagenum - 1,
      },
      function (this: any) {
        this.setPage(this.state.pagenum);
      }
    );
  };
  //向下翻页
  setDown = () => {
    this.setState(
      {
        pagenum: this.state.pagenum + 1,
      },
      function (this: any) {
        this.setPage(this.state.pagenum);
      }
    );
  };
  //页码跳转
  jumpPage = (num: number) => {
    this.setState(
      {
        pagenum: num,
      },
      function (this: any) {
        this.setPage(this.state.pagenum);
      }
    );
  };
  //组件接收到的数据发生更新
  UNSAFE_componentWillReceiveProps(nextProps: any) {
    this.setState(
      {
        newDatas: nextProps.datas,
        totalPage: Math.ceil(nextProps.datas.length / this.state.pageSize),
      },
      function (this: any) {
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
      function (this: any) {
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
    const { newDatas, currentTable, pageSize, totalPage, pagenum } = this.state;
    return (
      <div>
        <Header />
        <SeniorFun
          claerAllChecked={claerAllChecked}
          getObjByname={getObjByname}
        />
        <Table
          newDatas={newDatas}
          currentTable={currentTable}
          getObjById={getObjById}
          updateChecked={updateChecked}
          deletePersonObj={deletePersonObj}
          checkedAll={checkedAll}
        />
        <Footer
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
