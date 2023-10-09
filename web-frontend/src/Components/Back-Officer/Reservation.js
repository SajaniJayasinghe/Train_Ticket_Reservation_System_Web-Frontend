import React from "react";
import UserNavBar from "../Layouts/UserNavBar";

export default function Reservation() {
  return (
    <div>
      <UserNavBar />
      <div>
        <div style={{ width: "90%", marginLeft: 90 }}>
          <br />
          <br />
          <div align="center">
            <h3
              style={{
                fontFamily: "times new roman",
                fontSize: "40px",
                marginTop: 40,
              }}
            >
              <b>TRAIN BOOKINGS</b>
            </h3>
            <br />
            <div className="col-md-3" style={{ marginRight: "1300px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search Train Name"
                // onChange={this.handleSearchArea}
              />
              <br />
            </div>
            <table className="table">
              <thead>
                <tr bgcolor="#2B3856">
                  <th>
                    <font color="#fff">No</font>
                  </th>
                  <th>
                    <font color="#fff">Train ID</font>
                  </th>
                  <th>
                    <font color="#fff">Train Name</font>
                  </th>
                  <th>
                    <font color="#fff">Booking Date</font>
                  </th>
                  <th>
                    <font color="#fff">Reservation Date</font>
                  </th>
                  <th>
                    <font color="#fff">No of Seats</font>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {filteredCourses.map((course, index) => ( */}
                {/* <tr key={course._id}> */}
                <tr>
                  {/* <th scope="row">{index + 1}</th> */}
                  <td>1</td>
                  <td>T123</td>
                  <td>abc</td>
                  <td>2023-1-2</td>
                  <td>2023-2-1</td>
                  <td>3</td>
                </tr>
                {/* ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
