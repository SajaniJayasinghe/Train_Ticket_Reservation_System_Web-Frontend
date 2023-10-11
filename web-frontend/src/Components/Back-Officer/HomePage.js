import React, { useState, useEffect } from "react";
import UserNavBar from "../Layouts/UserNavBar";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function TravelerAccountManage() {
  const [trainSchedule, setTrainSchedule] = useState([]);
  const [filteredTrainSchedule, setFilteredTrainSchedule] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [error, setError] = useState(""); // State for error messages

  useEffect(() => {
    retrieveTrainSchedule();
  }, []);

  const retrieveTrainSchedule = () => {
    axios.get("https://localhost:7280/api/Trains").then((res) => {
      if (res.status === 200) {
        setTrainSchedule(res.data);
        setFilteredTrainSchedule(res.data); // Initialize filtered data with all data
      }
      console.log(res.data);
    });
  };

  const handleSearchArea = (e) => {
    const newSearchKey = e.target.value;
    setSearchKey(newSearchKey);

    // Filter trains based on the search key (train name)
    const filteredTrains = trainSchedule.filter((train) =>
      train.trainName.toLowerCase().includes(newSearchKey.toLowerCase())
    );

    setFilteredTrainSchedule(filteredTrains);
  };

  const handleDelete = async (trainId) => {
    if (window.confirm("Are you sure you want to delete this train?")) {
      try {
        const response = await axios.delete(
          `https://localhost:7280/api/Trains/${trainId}`
        );
        if (response.status === 200) {
          // Refresh the train schedule data after deletion
          retrieveTrainSchedule();
        } else {
          // Handle error (e.g., display an error message)
          setError("Failed to delete the train. Please try again.");
        }
      } catch (error) {
        // Handle network error or any other unexpected errors
        console.error("Error deleting train:", error);
        // Display an error message
        setError(
          "An error occurred while deleting the train. Please try again later."
        );
      }
    }
  };

  return (
    <div>
      <UserNavBar />

      <div>
        <div style={{ width: "98%", marginLeft: 18 }}>
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
              <b>TRAIN SCHEDULE MANAGEMENT</b>
            </h3>
            <br />
            <div
              className="col-md-3"
              style={{ marginRight: "1500px", marginTop: "50px" }}
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
            <div
              className="buttons"
              style={{
                position: "absolute",
                marginTop: "-70px",
                right: 80,
                margin: "-60px",
              }}
            >
              <Button
                variant="contained"
                style={{
                  background: "#123456",
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
                  background: "#123456",
                  flex: "1",
                  color: "#ffff",
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
                  background: "#123456",
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
            <table className="table">
              <thead>
                <tr bgcolor="#4863A0">
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
                  <th>
                    <font color="#fff">Edit Train</font>
                  </th>
                  <th>
                    <font color="#fff">Delete Train</font>
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
                    <td>
                      <Button
                        style={{
                          background: "#2E8B57",
                          flex: "1",
                          color: "#ffff",
                          marginRight: "10px",
                          borderRadius: 5,
                        }}
                        href={`/Trains/${train.id}`}
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        style={{
                          background: "#B21807",
                          flex: "1",
                          color: "#ffff",
                          marginRight: "10px",
                          borderRadius: 5,
                        }}
                        onClick={() => handleDelete(train.id)}
                      >
                        Delete
                      </Button>
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
