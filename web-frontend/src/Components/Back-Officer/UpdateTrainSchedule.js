import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserNavBar from "../Layouts/UserNavBar";
import Footer from "../Layouts/footer";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function UpdateTrainSchedule() {
  const trainStations = ["Station A", "Station B", "Station C", "Station D"];

  const [trainName, setTrainName] = useState("");
  const [trainNumber, setTrainNumber] = useState("");
  const [stations, setStations] = useState("");
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
        setStations(res.data.stations);
        setTrainSeats(res.data.trainSeats);
        setUnitPrice(res.data.unitPrice);
        setTrainStartTime(res.data.trainStartTime);
        setIsActive(res.data.isActive);
      }
      console.log(res.data);
    });
  }, []);

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
            <form>
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
                    // onChange={(e) => setTrainName(e.target.value)}
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
                    // onChange={(e) => setTrainNumber(e.target.value)}
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
                    // onChange={(e) => {
                    //   const newValue = Math.min(
                    //     Math.max(parseInt(e.target.value), 1),
                    //     5
                    //   );
                    //   setTrainSeats(newValue);
                    // }}
                    required
                    min="1" // Minimum value
                  />
                </div>

                <div className="form-group col-md-6" style={{ marginTop: 14 }}>
                  4. Unit Price
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Unit price"
                    value={unitPrice}
                    // onChange={(e) => setUnitPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginTop: 14 }}>
                  5. Train Stations
                  <select
                    className="form-control"
                    value={stations}
                    // onChange={(e) => setStations(e.target.value)}
                  >
                    <option value="Select">Select</option>
                    <option value="">A</option>
                  </select>
                </div>

                <div className="form-group col-md-6" style={{ marginTop: 14 }}>
                  6. Status
                  <select
                    className="form-control"
                    value={isActive}
                    // onChange={(e) => setIsActive(e.target.value === "true")}
                  >
                    <option value="true">Available</option>
                  </select>
                </div>

                <div className="form-group col-md-6" style={{ marginTop: 14 }}>
                  7. Time
                  <input
                    type="text"
                    className="form-control"
                    value={trainStartTime}
                    // placeholder="Train Time"
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
