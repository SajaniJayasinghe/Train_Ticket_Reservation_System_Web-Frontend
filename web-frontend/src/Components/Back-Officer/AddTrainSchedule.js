import React, { useState } from "react";
import UserNavBar from "../Layouts/UserNavBar";
import Footer from "../Layouts/footer";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function AddTrainSchedule() {
  const [TrainName, setTrainName] = useState("");
  const [TrainNumber, setTrainNumber] = useState("");
  const [TrainSeats, setTrainSeats] = useState(0);
  const [UnitPrice, setUnitPrice] = useState(0);
  const [Stations, setStations] = useState([]);
  const [IsActive, setIsActive] = useState(true);
  const [trainStartTime, setTrainStartTime] = useState("");
  const [StationName, setStationName] = useState(""); // New station name input
  const [StationTime, setStationTime] = useState(""); // New station time input
  const [error, setError] = useState(""); // State for error messages

  const handleRemoveStation = (index) => {
    const updatedStations = [...Stations];
    updatedStations.splice(index, 1);
    setStations(updatedStations);
  };

  const handleAddStation = () => {
    if (StationName && StationTime) {
      const newStation = {
        StationName,
        Time: StationTime,
      };

      setStations([...Stations, newStation]); // Add the new station to the array
      setStationName(""); // Clear the input fields
      setStationTime("");
      setError(""); // Clear the error message
    } else {
      setError("Please provide both station name and time.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object to send to the API
    const newTrain = {
      TrainName,
      TrainNumber,
      TrainSeats,
      UnitPrice,
      Stations,
      IsActive,
    };

    axios
      .post("https://localhost:7280/api/Trains", newTrain)
      .then((response) => {
        // Handle the response or perform any necessary actions
        console.log("Train added successfully", response.data);
        // Redirect to /backofficerhome on success
        window.alert("Train added successfully");
        window.location.href = "/backofficerhome";
      })
      .catch((error) => {
        // Handle errors
        setError("Error adding train. Please try again.");
        console.error("Error adding train", error);
        // Display error message (you can implement this part)
      });
  };

  const handleCancel = () => {
    // Clear all form fields and error messages
    setTrainName("");
    setTrainNumber("");
    setTrainSeats(0);
    setUnitPrice(0);
    setStations([]);
    setIsActive(true);
    setStationName("");
    setStationTime("");
    setError(""); // Clear the error message
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
            background: "#DBEAFB",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <img
            src="https://res.cloudinary.com/nibmsa/image/upload/v1696825236/showcasing-new-transportation-company-social-media-post-spotlighting-dynamic-lines_916191-74389_nsojs0-removebg-preview_otwavo.png"
            alt="Train Schedule Icon"
            style={{
              width: "64%",
              height: "auto",
              marginLeft: "38%",
              marginTop: "-100px",
            }}
          />
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h2 style={{ marginTop: -140 }}>Add Train Schedule</h2>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group" style={{ marginTop: 50 }}>
                    1. Train Name
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Train name"
                      value={TrainName}
                      onChange={(e) => setTrainName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group" style={{ marginTop: 50 }}>
                    2. Train Number
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Train number"
                      value={TrainNumber}
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
                      value={TrainSeats}
                      onChange={(e) =>
                        setTrainSeats(Math.max(1, parseInt(e.target.value)))
                      }
                      required
                      min="1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group" style={{ marginTop: 15 }}>
                    4. Unit Price
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Unit price"
                      value={UnitPrice}
                      onChange={(e) => setUnitPrice(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group" style={{ marginTop: 15 }}>
                <label>5. Train Stations and Time</label>
                {Stations.map((station, index) => (
                  <div key={index} className="row align-items-center">
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Station Name"
                        value={station.StationName}
                        readOnly
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Time"
                        value={station.s}
                        readOnly
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
                        onClick={() => handleRemoveStation(index)}
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
                      value={StationName}
                      onChange={(e) => setStationName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Time"
                      value={StationTime}
                      onChange={(e) => setStationTime(e.target.value)}
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
                      onClick={handleAddStation}
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
                      value={IsActive}
                      onChange={(e) => setIsActive(e.target.value === "true")}
                    >
                      <option value="true">Available</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group" style={{ marginTop: 15 }}>
                    7. Start Time
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Train Time"
                      required
                      value={trainStartTime}
                      onChange={(e) => setTrainStartTime(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <div className="row" style={{ marginTop: 20 }}>
                <div className="col-md">
                  <Button
                    type="submit"
                    style={{
                      background: "#3090C7",
                      width: "40%",
                      marginLeft: "100%",
                      height: "auto",
                      color: "BLACK",
                      borderRadius: 5,
                      fontSize: "15px",
                      marginTop: "25px",
                    }}
                  >
                    <i className="fa fa-check-circle"></i>&nbsp;{" "}
                    <b>Add Train</b>
                  </Button>
                </div>
                <div className="col-md">
                  <Button
                    type="button"
                    onClick={handleCancel}
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
