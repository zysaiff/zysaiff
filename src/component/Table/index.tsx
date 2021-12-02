import * as React from "react";
import Item from "../Item";
import "./index.css";
interface Props {
  newDatas: Array<any>;
  currentTable: Array<any>;
  getObjById: Function;
  updateChecked: Function;
  deletePersonObj: Function;
  checkedAll: Function;
}
export default class Tabel extends React.Component<Props> {
  hendleCheckedAll = (event: any) => {
    this.props.checkedAll(event.target.checked);
  };
  render() {
    const {
      newDatas,
      currentTable,
      getObjById,
      updateChecked,
      deletePersonObj,
    } = this.props;
    const head: Array<string> = [
      "姓名",
      "性别",
      "投递简历时间",
      "备注",
      "电话",
      "应聘岗位",
      "来源网站",
      "应届生",
      "毕业院校",
      "专业",
      "学历",
      "操作",
    ];
    const total: number = newDatas.length;
    const checkedCount: number = newDatas.reduce((pre: number, person: any) => pre + (person.checked ? 1 : 0), 0);
    return (
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={this.hendleCheckedAll}
                checked={total === checkedCount && total !== 0 ? true : false}
              />
            </th>
            {head.map((h, index) => {
              return <th key={index}>{h}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {currentTable.map((data) => {
            return (
              <Item
                key={data.id}
                {...data}
                getObjById={getObjById}
                updateChecked={updateChecked}
                deletePersonObj={deletePersonObj}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
