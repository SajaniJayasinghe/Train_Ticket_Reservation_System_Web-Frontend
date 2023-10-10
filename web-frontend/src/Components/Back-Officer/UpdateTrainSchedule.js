import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserNavBar from "../Layouts/UserNavBar";
import Footer from "../Layouts/footer";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function UpdateTrainSchedule() {
  const [trainName, setTrainName] = useState("");
  const [trainNumber, setTrainNumber] = useState("");
  const [stations, setStations] = useState([]);
  const [trainSeats, setTrainSeats] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [trainStartTime, setTrainStartTime] = useState("");
  const [isActive, setIsActive] = useState("");

  const params = useParams();
  const trainID = params.trainID;

  useEffect(() => {
    axios.get(`https://localhost:7280/api/Trains/${trainID}`).then((res) => {
      if (res.status === 200) {
        setTrainName(res.data.trainName);
        setTrainNumber(res.data.trainNumber);
        setStations(res.data.stations || []);
        setTrainSeats(res.data.trainSeats);
        setUnitPrice(res.data.unitPrice);
        setTrainStartTime(res.data.trainStartTime);
        setIsActive(res.data.isActive);
      }
      console.log(res.data);
    });
  }, [trainID]);

  const handleStatusChange = (e) => {
    setIsActive(e.target.value);
  };

  const handleUpdateTrain = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Prepare the updated train schedule data
    const updatedTrainSchedule = {
      id: trainID,
      trainName,
      trainNumber,
      stations,
      trainSeats,
      unitPrice,
      trainStartTime,
      isActive,
    };

    // Make a PUT request to update the train schedule
    axios
      .put(`https://localhost:7280/api/Trains/${trainID}`, updatedTrainSchedule)
      .then((res) => {
        if (res.status === 204) {
          alert("Train schedule updated successfully");
          window.location.href = "/backofficerhome";
          // Redirect to another page or perform any other action after successful update
        } else {
          alert("Train schedule update failed");
        }
      })
      .catch((error) => {
        console.error("Error updating train schedule:", error);
      });
  };

  // Function to add a new station to the stations array
  const addStation = () => {
    const newStation = {
      StationName: "", // Initialize with empty values
      Time: "",
    };

    setStations([...stations, newStation]);
  };

  // Function to update station name and time in the stations array
  const updateStation = (index, fieldName, value) => {
    const updatedStations = [...stations];
    updatedStations[index][fieldName] = value;
    setStations(updatedStations);
  };

  // Function to remove a station from the stations array
  const removeStation = (index) => {
    const updatedStations = [...stations];
    updatedStations.splice(index, 1);
    setStations(updatedStations);
  };

  return (
    <div>
      <UserNavBar />
      <div
        className="row d-flex align-items-center justify-content-center"
        style={{ marginTop: 80 }}
      >
        <div
          style={{
            width: 800,
            background: "#DBE9FA",
            height: 570,
            borderRadius: "20px",
          }}
        >
          <div className="card-body">
            <form onSubmit={handleUpdateTrain}>
              <div className="col-md-6" style={{ marginTop: 60 }}>
                <h2>Update Train Schedule</h2>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "25%",
                  left: "66%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img
                  src="https://res.cloudinary.com/nibmsa/image/upload/v1696825236/showcasing-new-transportation-company-social-media-post-spotlighting-dynamic-lines_916191-74389_nsojs0-removebg-preview_otwavo.png"
                  alt="Train Schedule Icon"
                  style={{ width: "70%", height: "auto" }}
                />
              </div>
              <div className="row">
                <div className="form-group col-md-6" style={{ marginTop: 60 }}>
                  1. Train Name
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Train name"
                    value={trainName}
                    onChange={(e) => setTrainName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6" style={{ marginTop: 60 }}>
                  2. Train Number
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Train number"
                    value={trainNumber}
                    onChange={(e) => setTrainNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6" style={{ marginTop: 14 }}>
                  3. Number of Seats
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Number of Seats"
                    value={trainSeats}
                    onChange={(e) => {
                      const newValue = Math.min(
                        Math.max(parseInt(e.target.value), 1)
                      );
                      setTrainSeats(newValue);
                    }}
                    required
                    min="1"
                  />
                </div>

                <div className="form-group col-md-6" style={{ marginTop: 14 }}>
                  4. Unit Price
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Unit price"
                    value={unitPrice}
                    onChange={(e) => setUnitPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginTop: 14 }}>
                  5. Train Stations
                  <div>
                    <button type="button" onClick={addStation}>
                      Add Station
                    </button>
                    {stations.map((station, index) => (
                      <div key={index}>
                        <input
                          type="text"
                          placeholder="Station Name"
                          value={station.stationName}
                          onChange={(e) =>
                            updateStation(index, "StationName", e.target.value)
                          }
                        />
                        <input
                          type="text"
                          placeholder="Station Time"
                          value={station.time}
                          onChange={(e) =>
                            updateStation(index, "Time", e.target.value)
                          }
                        />
                        <button
                          type="button"
                          onClick={() => removeStation(index)}
                        >
                          Remove Station
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-group col-md-6" style={{ marginTop: 14 }}>
                  6. Status
                  <select
                    className="form-control"
                    value={isActive}
                    onChange={handleStatusChange}
                  >
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                  </select>
                </div>

                <div className="form-group col-md-6" style={{ marginTop: 14 }}>
                  7. Time
                  <input
                    type="text"
                    className="form-control"
                    value={trainStartTime}
                    placeholder="Train Time"
                    onChange={(e) => setTrainStartTime(e.target.value)}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md">
                    <Button
                      type="submit"
                      style={{
                        background: "#3090C7",
                        width: "40%",
                        marginLeft: "400px",
                        height: "auto",
                        color: "BLACK",
                        borderRadius: 5,
                        fontSize: "15px",
                        marginTop: "25px",
                      }}
                    >
                      <i className="fa fa-check-circle"></i>&nbsp;{" "}
                      <b>Update Train</b>
                    </Button>
                  </div>
                  <div className="col-md">
                    <Button
                      type="button"
                      style={{
                        marginLeft: "90px",
                        background: "#FFA500",
                        width: "60%",
                        height: "auto",
                        color: "BLACK",
                        fontSize: "15px",
                        borderRadius: 5,
                        marginTop: "25px",
                      }}
                    >
                      <i className="fa fa-times-circle"></i>&nbsp;<b> CANCEL</b>
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br /> <br /> <br />
      <Footer />
    </div>
  );
}
