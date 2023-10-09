import React, { useState, useEffect } from "react";
import TravelAgentNavbar from "../Layouts/TravelAgentNavbar";
import Footer from "../Layouts/footer";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function BookingTickets() {
  const [bookingDate, setBookingDate] = useState("");
  const [trainNames, setTrainNames] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState("");
  const [passengerName, setPassengerName] = useState("");
  const [passengerEmail, setPassengerEmail] = useState("");

  useEffect(() => {
    axios
      .get("/api/trainNames")
      .then((response) => {
        setTrainNames(response.data);
      })
      .catch((error) => {
        console.error("Error fetching train names:", error);
      });

    // Set today's date as the default booking date
    const today = new Date().toISOString().substr(0, 10);
    setBookingDate(today);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to your server
    const reservationData = {
      bookingDate,
      selectedTrain,
      passengerName,
      passengerEmail,
    };
    // Send the reservationData to your server for processing
    axios
      .post("/api/reservation", reservationData)
      .then((response) => {
        console.log("Reservation successful:", response.data);
      })
      .catch((error) => {
        console.error("Error making reservation:", error);
      });
  };

  return (
    <div>
      <TravelAgentNavbar />
      <br />
      <br />
      <div
        class="row d-flex align-items-center justify-content-center"
        style={{ marginTop: 70 }}
      >
        <div
          style={{
            width: 800,
            background: "#DBE9FA",
            height: 500,
            borderRadius: "20px",
          }}
        >
          <div class="card-body">
            <form onSubmit={handleSubmit}>
              <div className="col-md-6" style={{ marginTop: 40 }}>
                <h2>Book Your Seats</h2>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "28%",
                  left: "69%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img
                  src="https://res.cloudinary.com/nibmsa/image/upload/v1696839749/Screenshot_2023-10-09_at_13.49.52-removebg-preview_2_h5kd1q.png"
                  alt="Train Schedule Icon"
                  style={{ width: "70%", height: "auto" }}
                />
              </div>
              <div class="row">
                <div class="form-group col-md-6" style={{ marginTop: 37 }}>
                  1. NIC Number
                  <input
                    type="text"
                    style={{ marginTop: 6 }}
                    class="form-control"
                    placeholder="NIC Number"
                  />
                </div>
                <div
                  class="form-group col-md-6"
                  style={{ marginTop: 37, marginBottom: 10 }}
                >
                  2. No of Seats
                  <input
                    type="number"
                    style={{ marginTop: 6 }}
                    className="form-control"
                    placeholder="No of Seats"
                    min="1"
                    max="5"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="selectedTrain">3.From</label>
                  <select
                    id="selectedTrain"
                    className="form-control"
                    style={{ marginTop: 6 }}
                    // value={selectedTrain}
                    // onChange={(e) => setSelectedTrain(e.target.value)}
                  >
                    <option value="">Select Station</option>
                    {/* {trainNames.map((trainName, index) => (
                    <option key={index} value={trainName}>
                      {trainName} */}
                    {/* </option> */}
                    {/* ))} */}
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="selectedTrain">4. To</label>
                  <select
                    id="selectedTrain"
                    className="form-control"
                    style={{ marginTop: 6 }}
                    // value={selectedTrain}
                    // onChange={(e) => setSelectedTrain(e.target.value)}
                  >
                    <option value="">Select Station</option>
                    {/* {trainNames.map((trainName, index) => (
                    <option key={index} value={trainName}>
                      {trainName} */}
                    {/* </option> */}
                    {/* ))} */}
                  </select>
                </div>
                <div class="form-group col-md-6" style={{ marginTop: 14 }}>
                  5. Booking Date
                  <input
                    type="date"
                    id="bookingDate"
                    className="form-control"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                  />
                </div>

                <div class="form-group col-md-6" style={{ marginTop: 14 }}>
                  6. Reservation Date
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Reservation date"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Button
                      type="submit"
                      style={{
                        background: "#3090C7",
                        width: "100%",
                        height: "auto",
                        color: "BLACK",
                        borderRadius: 5,
                        fontSize: "15px",
                        marginRight: "40px",
                        marginTop: "40px",
                      }}
                    >
                      <i className="fa fa-check-circle"></i>&nbsp;
                      <b>SEARCH</b>
                    </Button>
                  </div>
                  <div className="col-md-6">
                    <Button
                      type="reset"
                      style={{
                        background: "#FFA500",
                        width: "100%",
                        height: "auto",
                        color: "BLACK",
                        fontSize: "15px",
                        borderRadius: 5,
                        marginTop: "40px",
                        marginLeft: "20px",
                      }}
                    >
                      <i className="fa fa-times-circle"></i>&nbsp;<b>RESET</b>
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
