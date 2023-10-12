import React, { useState } from "react";
import TravelAgentNavbar from "../Layouts/TravelAgentNavbar";
import Footer from "../Layouts/footer";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function BookingTickets() {
  const [bookingDate, setBookingDate] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [numberOfSeats, setNumberOfSeats] = useState(1);
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [nic, setNic] = useState("");
  const [train, setTrain] = useState("");
  const [trainName, setTrainName] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [filteredTrains, setFilteredTrains] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [reservationCount, setReservationCount] = useState(0);
  const [createReservationError, setCreateReservationError] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    if (
      !nic ||
      !numberOfSeats ||
      !fromStation ||
      !toStation ||
      !reservationDate
    ) {
      setError("Please fill in all required fields before searching.");
      return;
    } else {
      setError("");
    }

    const searchData = {
      fromStation,
      toStation,
      reservationDate,
    };

    axios
      .get("https://localhost:7280/api/Reservations/filterTrains", {
        params: searchData,
      })
      .then((response) => {
        console.log("Filtered Trains Retrieved Successfully", response.data);
        setFilteredTrains(response.data);
        setError("");
      })
      .catch((error) => {
        console.error("Error retrieving filtered trains", error);
        setError("Error retrieving filtered trains");
      });
  };

  const handleSelectTrain = (trainName, id, fee) => {
    setTrainName(trainName);
    setTrain(id);
    setTicketPrice(fee);

    if (reservationCount >= 4) {
      setCreateReservationError(
        "You can create a maximum of 4 reservations per reference ID."
      );
    } else {
      const currentDate = new Date();
      const bookingDateObject = new Date(bookingDate);
      const reservationDateObject = new Date(reservationDate);

      const differenceInDays = Math.floor(
        (reservationDateObject - currentDate) / (1000 * 3600 * 24)
      );

      if (differenceInDays <= 0 || differenceInDays > 30) {
        setError(
          "Reservation date must be within 30 days from the booking date."
        );
      } else {
        const newReservation = {
          bookingDate,
          reservationDate,
          numberOfSeats,
          fromStation,
          toStation,
          nic,
          train: id, // Use trainNumber here
          trainName,
          ticketPrice: fee,
        };

        axios
          .post("https://localhost:7280/api/Reservations", newReservation)
          .then((response) => {
            console.log("Reservation added successfully", response.data);
            setSuccessMessage("Reservation added successfully");
            setError("");
            window.location.href = "/reservationHistory";
          })
          .catch((error) => {
            console.error("Error adding Reservation", error);
            setError("Error adding Reservation");
          });
      }
    }
  };

  const stationOptions = ["Badulla", "Kandy", "Colombo"];

  const resetForm = () => {
    setNic("");
    setNumberOfSeats(1);
    setBookingDate("");
    setFromStation("");
    setToStation("");
    setReservationDate("");
    setFilteredTrains([]);
    setError("");
    setSuccessMessage("");
  };

  return (
    <div>
      <TravelAgentNavbar />
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <div style={{ display: "flex" }}>
            <img
              src="https://res.cloudinary.com/nibmsa/image/upload/v1679597585/Screenshot_2023-03-24_at_00.20.41-removebg-preview_j8yj3o.png"
              alt="Train Schedule Icon"
              style={{
                width: "30%",
                height: "auto",
                marginTop: "40px",
                marginLeft: "420px",
              }}
            />
          </div>
          <div
            style={{
              background: "#DBE9FA",
              borderRadius: "20px",
              padding: "20px",
              marginTop: "-150px",
              width: "80%",
              height: "auto",
            }}
          >
            <form onSubmit={handleSearch}>
              <h2 style={{ marginTop: 30 }}>Book Your Tickets</h2>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              {successMessage && (
                <div
                  className="alert alert-success"
                  role="alert"
                  style={{ marginTop: 12 }}
                >
                  {successMessage}
                </div>
              )}

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group" style={{ marginTop: 50 }}>
                    <label>NIC Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="NIC Number"
                      value={nic}
                      onChange={(e) => setNic(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group" style={{ marginTop: 50 }}>
                    <label>Number of Seats</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Number of Seats"
                      value={numberOfSeats}
                      onChange={(e) => setNumberOfSeats(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group" style={{ marginTop: 15 }}>
                    <label>From Station</label>
                    <select
                      id="fromStation"
                      className="form-control"
                      value={fromStation}
                      onChange={(e) => setFromStation(e.target.value)}
                      required
                    >
                      <option value="">Select Station</option>
                      {stationOptions.map((station, index) => (
                        <option key={index} value={station}>
                          {station}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group" style={{ marginTop: 15 }}>
                    <label>To Station</label>
                    <select
                      id="toStation"
                      className="form-control"
                      value={toStation}
                      onChange={(e) => setToStation(e.target.value)}
                      required
                    >
                      <option value="">Select Station</option>
                      {stationOptions.map((station, index) => (
                        <option key={index} value={station}>
                          {station}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group" style={{ marginTop: 15 }}>
                    <label>Booking Date</label>
                    <input
                      type="date"
                      id="bookingDate"
                      className="form-control"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group" style={{ marginTop: 15 }}>
                    <label>Reservation Date</label>
                    <input
                      type="date"
                      id="reservationDate"
                      className="form-control"
                      value={reservationDate}
                      onChange={(e) => setReservationDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                style={{
                  background: "#3090C7",
                  width: "100%",
                  color: "white",
                  borderRadius: 5,
                  fontSize: "15px",
                  marginTop: "20px",
                }}
              >
                <i className="fa fa-search"></i>&nbsp;<b>SEARCH</b>
              </Button>
            </form>
          </div>
        </div>

        <div className="col-md-6" style={{ marginLeft: -130 }}>
          <h3 style={{ marginTop: -190 }}>Available Trains</h3>
          <div
            style={{
              background: "#DBE9FA",
              borderRadius: "10px",
              width: "96%",
            }}
          >
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Train Name</th>
                  <th>Train ID</th>
                  <th>Available Seats</th>
                  <th>Fee</th>
                  <th>Select</th>
                  <th>Cancel</th>
                </tr>
              </thead>
              <tbody>
                {filteredTrains.map((train) => (
                  <tr key={train.id}>
                    <td>{train.trainName}</td>
                    <td>{train.trainNumber}</td>
                    <td>{train.availableSeats}</td>
                    <td>{train.fee}</td>
                    <td>
                      <Button
                        onClick={() =>
                          handleSelectTrain(
                            train.trainName,
                            train.id,
                            train.fee
                          )
                        }
                        style={{
                          background: "#3090C7",
                          color: "white",
                          borderRadius: 5,
                        }}
                      >
                        Select
                      </Button>
                    </td>
                    <td>
                      <Button
                        style={{
                          background: "#3090C7",
                          color: "white",
                          borderRadius: 5,
                        }}
                        onClick={resetForm}
                      >
                        Cancel
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
