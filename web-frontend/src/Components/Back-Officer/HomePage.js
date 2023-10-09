import React from "react";
import UserNavBar from "../Layouts/UserNavBar";
import Button from "@material-ui/core/Button";

export default function HomePage() {
  return (
    <div>
      <UserNavBar />
      <div
        className="buttons"
        style={{
          position: "absolute",
          marginTop: "50px",
          right: 0,
          margin: "20px",
        }}
      >
        <Button
          variant="contained"
          style={{
            background: "#B21807",
            flex: "1",
            color: "#ffff",
            marginRight: "10px",
            borderRadius: 5,
          }}
          href="/addTrainSchedule"
          disableElevation
          type="submit"
        >
          <b>Add Train Schedule</b>
        </Button>
        <Button
          variant="contained"
          style={{
            background: "#FF8C00",
            flex: "1",
            color: "#000000",
            borderRadius: 5,
          }}
          href="/travelerAccountManage"
          disableElevation
          type="submit"
        >
          <b>Traveler Account Manage</b>
        </Button>
        <Button
          variant="contained"
          style={{
            background: "#004225",
            flex: "1",
            color: "#ffff",
            borderRadius: 5,
            marginLeft: "10px",
          }}
          href="/backofficerreservation"
          disableElevation
          type="submit"
        >
          <b>Reservation</b>
        </Button>
      </div>
      <div>
        <div style={{ width: "90%", marginLeft: 90 }}>
          <br />
          <br />
          <div align="center">
            <h3
              style={{
                fontFamily: "times new roman",
                fontSize: "40px",
                marginTop: 80,
              }}
            >
              <b>TRAINS SCHEDULE</b>
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
                    <font color="#fff">Train Name</font>
                  </th>
                  <th>
                    <font color="#fff">Train Number</font>
                  </th>
                  <th>
                    <font color="#fff">Stations</font>
                  </th>
                  <th>
                    <font color="#fff">Seats</font>
                  </th>
                  <th>
                    <font color="#fff">Unit Price</font>
                  </th>
                  <th>
                    <font color="#fff">Train Status</font>
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
                  <td>T123</td>
                  <td>Galle</td>
                  <td>52</td>
                  <td>Rs.100.00</td>
                  <td>
                    <Button
                      style={{
                        background: "#004225",
                        flex: "1",
                        color: "#ffff",
                        marginRight: "10px",
                        borderRadius: 5,
                      }}
                      href="/updateTrainSchedule"
                      //   onClick={() => handleActivateUser(user.id)}
                    >
                      Edit
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
                      Delete
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
