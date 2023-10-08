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
          marginTop: "40px",
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
          href="/"
          disableElevation
          type="submit"
        >
          <b>Traveler Account Manage</b>
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
              <b>TRAIN SCHEDULE MANAGEMENT</b>
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
                    <font color="#fff">Action</font>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
