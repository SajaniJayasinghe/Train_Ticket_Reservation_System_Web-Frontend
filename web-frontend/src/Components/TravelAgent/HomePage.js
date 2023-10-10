import React from "react";
import TravelAgentNavbar from "../Layouts/TravelAgentNavbar";
import Button from "@material-ui/core/Button";

export default function HomePage() {
  return (
    <div>
      <TravelAgentNavbar />
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
            background: "#151B54",
            flex: "1",
            color: "#ffff",
            marginRight: "10px",
            borderRadius: 5,
          }}
          href="/travelerRegistration"
          disableElevation
          type="submit"
        >
          <b>Traveler Registration</b>
        </Button>

        <Button
          variant="contained"
          style={{
            background: "#B21807",
            flex: "1",
            color: "#ffff",
            marginRight: "10px",
            borderRadius: 5,
          }}
          href="/bookingTickets"
          disableElevation
          type="submit"
        >
          <b>Booking Tickets</b>
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
                placeholder="Search Train Number"
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
                  <td>abc</td>
                  <td>1234</td>
                  <td>52</td>
                  <td>Rs.100.00</td>
                  <td>Active</td>
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
