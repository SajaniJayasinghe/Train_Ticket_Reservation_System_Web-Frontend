import React, { useState, useEffect } from "react";
import TravelAgentNavbar from "../Layouts/TravelAgentNavbar";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function HomePage() {
  const [filteredTrainSchedule, setFilteredTrainSchedule] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [error, setError] = useState(""); // State for error messages

  useEffect(() => {
    retrieveTrainSchedule();
  }, []);

  const retrieveTrainSchedule = () => {
    axios.get("https://localhost:7280/api/Trains").then((res) => {
      if (res.status === 200) {
        setFilteredTrainSchedule(res.data); // Initialize filtered data with all data
      }
    });
  };

  const handleSearchArea = (e) => {
    const newSearchKey = e.target.value;
    setSearchKey(newSearchKey);

    // Filter trains based on the search key (train name)
    const filteredTrains = filteredTrainSchedule.filter((train) =>
      train.trainName.toLowerCase().includes(newSearchKey.toLowerCase())
    );

    setFilteredTrainSchedule(filteredTrains);
  };

  return (
    <div>
      <TravelAgentNavbar />
      <div>
        <div style={{ width: "98%", marginLeft: 18 }}>
          <br />
          <br />
          <div align="center">
            <h3
              style={{
                fontFamily: "times new roman",
                fontSize: "40px",
                marginTop: 20,
              }}
            >
              <b>TRAIN SCHEDULE MANAGEMENT</b>
            </h3>
            <br />
            <div
              className="buttons"
              style={{
                position: "absolute",
                right: 0,
                margin: "20px",
              }}
            >
              <Button
                variant="contained"
                style={{
                  background: "#2F539B",
                  flex: "1",
                  color: "#ffff",
                  marginRight: "6px",
                  borderRadius: 5,
                }}
                href="/travelerRegistration"
                disableElevation
                type="submit"
              >
                <b>Taveler Registration</b>
              </Button>
              <Button
                variant="contained"
                style={{
                  background: "#800000",
                  flex: "1",
                  color: "#ffff",
                  marginRight: "6px",
                  borderRadius: 5,
                }}
                href="/travelerDetails"
                disableElevation
                type="submit"
              >
                <b>Taveler Details</b>
              </Button>
              <Button
                variant="contained"
                style={{
                  background: "#006A4E",
                  flex: "1",
                  color: "#ffff",
                  marginRight: "6px",
                  borderRadius: 5,
                }}
                href="/bookingTickets"
                disableElevation
                type="submit"
              >
                <b>Booking Tickets</b>
              </Button>
              <Button
                variant="contained"
                style={{
                  background: "#151B54",
                  flex: "1",
                  color: "#ffff",
                  marginRight: "6px",
                  borderRadius: 5,
                }}
                href="/reservationHistory"
                disableElevation
                type="submit"
              >
                <b>Reservation History</b>
              </Button>
            </div>
            <div
              className="col-md-3"
              style={{ marginRight: "1500px", marginTop: "20px" }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Search Train Name"
                onChange={handleSearchArea}
                value={searchKey}
              />
              <br />
            </div>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
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
                {filteredTrainSchedule.map((train, index) => (
                  <tr key={train.id}>
                    <td>{index + 1}</td>
                    <td>{train.trainName}</td>
                    <td>{train.trainNumber}</td>
                    <td>
                      {train.stations
                        .map(
                          (station) =>
                            `${station.stationName} - ${station.time}`
                        )
                        .join(", ")}
                    </td>
                    <td>{train.trainSeats}</td>
                    <td>{train.unitPrice}</td>
                    <td
                      style={{
                        fontWeight: "bold",
                        color: train.isActive ? "#004225" : "red",
                      }}
                    >
                      {train.isActive ? "Available" : "Unavailable"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
