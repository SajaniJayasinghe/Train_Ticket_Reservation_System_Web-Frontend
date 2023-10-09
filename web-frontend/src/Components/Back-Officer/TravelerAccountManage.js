import React from "react";
import UserNavBar from "../Layouts/UserNavBar";
import Button from "@material-ui/core/Button";

export default function TravelerAccountManage() {
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
                marginTop: 30,
              }}
            >
              <b>TRAVELERS ACCOUNT MANAGEMENT</b>
            </h3>
            <br />
            <div
              className="col-md-3"
              style={{ marginRight: "1300px", marginTop: "40px" }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Search Traveler NIC"
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
                    <font color="#fff">Full Name</font>
                  </th>
                  <th>
                    <font color="#fff">Email Address</font>
                  </th>
                  <th>
                    <font color="#fff">NIC</font>
                  </th>
                  <th>
                    <font color="#fff">Phone Number</font>
                  </th>
                  <th>
                    <font color="#fff">Account Status</font>
                  </th>
                  <th>
                    <font color="#fff">Account Action</font>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {filteredCourses.map((course, index) => ( */}
                {/* <tr key={course._id}> */}
                <tr>
                  {/* <th scope="row">{index + 1}</th> */}
                  <td>1</td>
                  <td>sajani</td>
                  <td>abc</td>
                  <td>1234</td>
                  <td>1234</td>
                  <td>Active</td>
                  <td>
                    <Button
                      style={{
                        background: "#004225",
                        flex: "1",
                        color: "#ffff",
                        marginRight: "10px",
                        borderRadius: 5,
                      }}
                      //   onClick={() => handleActivateUser(user.id)}
                    >
                      Activate
                    </Button>
                    <Button
                      style={{
                        background: "#B21807",
                        flex: "1",
                        color: "#ffff",
                        marginRight: "10px",
                        borderRadius: 5,
                      }}
                      //   onClick={() => handleActivateUser(user.id)}
                    >
                      Deactivate
                    </Button>
                  </td>
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
