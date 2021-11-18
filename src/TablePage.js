import React, { Component } from "react";
import getData from "./temp/data";
// import Pagination from "./Pagination";
export default class TablePage extends Component {
  state = {
    currentPage: 1,
    data: getData(),
    limit: 10,
  };

  // changePage = (page) => {
  //   const currentNumOfRecords = this.state.limit;
  //   if(page<1){
  //     page = 1;
  //   }
  //   if(page>numOfPages()){
  //     page = numOfPages();
  //   }
  // }
  // numOfPages =() =>{
  //   const currentNumOfRecords = this.state.limit;
  //   console.log(currentNumOfRecords);
  //   return Math.ceil(this.state.data.length/currentNumOfRecords);
  // }
  hanldeChange = (e) =>
    this.setState({
      limit: e.target.value,
      currentPage: 1,
    });

  prevPageFun = () => {
    console.log("Clikced");
    if (this.state.currentPage > 1)
      this.setState({ currentPage: this.state.currentPage - 1 });
    // changePage(this.state.currentPage)
  };

  nextPageFun = () => {
    console.log("Clikced");
    if (this.state.currentPage < this.state.data.length / this.state.limit)
      this.setState({ currentPage: this.state.currentPage + 1 });
    // changePage(this.state.currentPage)
  };
  lastPageFun = () => {
    console.log("Clikced");
    // if (this.state.currentPage > this.state.data.length/this.state.limit)
    this.setState({ currentPage: this.state.data.length / this.state.limit });
    // changePage(this.state.currentPage)
  };
  firstPageFun = () => {
    console.log("Clikced");
    if (this.state.currentPage > 1) this.setState({ currentPage: 1 });
    // changePage(this.state.currentPage)
  };

  render() {
    let { limit, data, currentPage } = this.state;
    console.log(this.state.limit);
    // let { limit, currentPage } = this.state;
    // console.log(this.state.val);
    let filteredArray = data;

    // console.log(this.state.data)
    let res = limit;
    console.log(res);

    let numberOfPage = Math.ceil(filteredArray.length / limit);
    console.log(numberOfPage);
    console.log(currentPage);
    let si = (currentPage - 1) * limit;
    let eidx =parseInt(si)  + parseInt(limit);
    filteredArray = filteredArray.slice(si, eidx);

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Email ID</th>
            </tr>
          </thead>
          <tbody id="body">
            {filteredArray.map((dataobj) => {
              return (
                <tr scope="row" key="dataObj._id">
                  <td>{dataobj.rollno}</td>
                  <td>{dataobj.name}</td>

                  <td>{dataobj.email}</td>
                </tr>
              );
            })} 
          </tbody>
          {/* <Pagination></Pagination> */}
          <tfoot>
            <tr>
              <td>
                <button id="nextpage" onClick={this.firstPageFun}>
                  First{" "}
                </button>
                <button id="prevpage" onClick={this.prevPageFun}>
                  {" "}
                  Prev
                </button>
                <input
                  type="text"
                  id="pageNo"
                  disabled
                  value={this.state.currentPage}
                  style={{ width: "20px" }}
                />
                <button id="nextpage" onClick={this.nextPageFun}>
                  {" "}
                  Next
                </button>
                <button id="lastpage" onClick={this.lastPageFun}>
                  Last
                </button>
              </td>
              <td>
                <select id="dropdown" onChange={this.hanldeChange}>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

// function Pagination() {
//   return (
//     <div>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Roll No</th>
//             <th>Name</th>
//             <th>Email ID</th>
//           </tr>
//         </thead>
//         <tbody id="body">

//         </tbody>
//         <tfoot>
//           <tr>
//             <td>
//               <button id="nextpage"> </button>
//               <button id="prevpage"> </button>
//               <input
//                 type="text"
//                 id="pageNo"
//                 disabled
//                 value=""
//                 style={{ width: "20px" }}
//               />
//               <button id="nextpage"> </button>
//               <button id="lastpage"> </button>
//             </td>
//             <td>
//               <select name="values" id="values">
//                   <option value="10">10</option>
//                   <option value="20">20</option>
//               </select>
//             </td>
//           </tr>
//         </tfoot>
//       </table>
//     </div>
//   );
// }

// export default Pagination;
 