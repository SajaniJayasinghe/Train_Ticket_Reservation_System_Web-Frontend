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
  const [newStation, setNewStation] = useState({
    stationName: "",
    time: "",
  });

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
        // setIsActive(res.data.isActive);
        setIsActive(res.data.isActive ? "Available" : "Unavailable");
      }
    });
  }, [trainID]);

  const handleStatusChange = (e) => {
    setIsActive(e.target.value);
  };

  // Function to update station name and time in the stations array
  const updateStation = (index, fieldName, value) => {
    const updatedStations = [...stations];
    updatedStations[index][fieldName] = value;
    setStations(updatedStations);
  };

  const handleUpdateTrain = (e) => {
    e.preventDefault();
    const updatedTrainSchedule = {
      id: trainID,
      trainName,
      trainNumber,
      stations,
      trainSeats,
      unitPrice,
      trainStartTime,
      // isActive,
      isActive: isActive === "Available",
    };

    axios
      .put(`https://localhost:7280/api/Trains/${trainID}`, updatedTrainSchedule)
      .then((res) => {
        if (res.status === 204) {
          alert("Train schedule updated successfully");
          window.location.href = "/backofficerhome";
        } else {
          alert("Train schedule update failed");
        }
      })
      .catch((error) => {
        console.error("Error updating train schedule:", error);
      });
  };

  const addStation = () => {
    setStations([...stations, { ...newStation }]);
    setNewStation({
      stationName: "",
      time: "",
    });
  };

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
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <img
            src="https://res.cloudinary.com/nibmsa/image/upload/v1696825236/showcasing-new-transportation-company-social-media-post-spotlighting-dynamic-lines_916191-74389_nsojs0-removebg-preview_otwavo.png"
            alt="Train Schedule Icon"
            style={{
              width: "62%",
              height: "auto",
              marginLeft: "43%",
              marginTop: "-100px",
            }}
          />
          <div className="card-body">
            <form onSubmit={handleUpdateTrain}>
              <h2 style={{ marginTop: -100 }}>Update Train Schedule</h2>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group" style={{ marginTop: 20 }}>
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
                </div>
                <div className="col-md-6">
                  <div className="form-group" style={{ marginTop: 20 }}>
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
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group" style={{ marginTop: 15 }}>
                    3. Number of Seats
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Number of Seats"
                      value={trainSeats}
                      onChange={(e) => {
                        const newValue = Math.max(parseInt(e.target.value), 1);
                        setTrainSeats(newValue);
                      }}
                      required
                      min="1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group" style={{ marginTop: 15 }}>
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
                </div>
              </div>

              <div className="form-group" style={{ marginTop: 15 }}>
                <label>5. Train Stations and Time</label>
                {stations.map((station, index) => (
                  <div key={index} className="row align-items-center">
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Station Name"
                        value={station.stationName}
                        onChange={(e) =>
                          updateStation(index, "stationName", e.target.value)
                        }
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Time"
                        value={station.time}
                        onChange={(e) =>
                          updateStation(index, "time", e.target.value)
                        }
                      />
                    </div>
                    <div className="col-md-2">
                      <Button
                        style={{
                          background: "#C0C0C0",
                          width: "100%",
                          height: "auto",
                          color: "BLACK",
                          borderRadius: 5,
                          fontSize: "15px",
                          marginTop: "0px",
                        }}
                        type="button"
                        onClick={() => removeStation(index)}
                      >
                        -
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Station Name"
                      value={newStation.stationName}
                      onChange={(e) =>
                        setNewStation({
                          ...newStation,
                          stationName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Time"
                      value={newStation.time}
                      onChange={(e) =>
                        setNewStation({
                          ...newStation,
                          time: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-md-2">
                    <Button
                      style={{
                        background: "#C0C0C0",
                        width: "100%",
                        height: "auto",
                        color: "BLACK",
                        borderRadius: 5,
                        fontSize: "15px",
                        marginTop: "10px",
                      }}
                      type="button"
                      onClick={addStation}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group" style={{ marginTop: 15 }}>
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
                </div>
                <div className="col-md-6">
                  <div className="form-group" style={{ marginTop: 15 }}>
                    7. Start Time
                    <input
                      type="text"
                      className="form-control"
                      value={trainStartTime}
                      placeholder="Train Time"
                      onChange={(e) => setTrainStartTime(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginTop: 20 }}>
                <div className="col-md">
                  <Button
                    type="submit"
                    style={{
                      background: "#3090C7",
                      width: "60%",
                      marginLeft: "80%",
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
                      marginLeft: "140px",
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
            </form>
          </div>
        </div>
      </div>
      <br /> <br /> <br />
      <Footer />
    </div>
  );
}
