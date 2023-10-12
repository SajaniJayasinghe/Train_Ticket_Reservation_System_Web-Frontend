import React, { useState, useEffect } from "react";
import TravelAgentNavbar from "../Layouts/TravelAgentNavbar";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function ReservationHistory() {
  const [reservations, setReservations] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [filteredReservations, setFilteredReservations] = useState([]); // State to store filtered reservations
  const [error, setError] = useState("");

  useEffect(() => {
    retrieveReservations();
  }, []);

  const retrieveReservations = () => {
    axios.get("https://localhost:7280/api/Reservations").then((res) => {
      if (res.status === 200) {
        setReservations(res.data);
        setFilteredReservations(res.data); // Initialize filtered reservations with all reservations
      }
    });
  };

  const handleSearchArea = (e) => {
    const newSearchKey = e.target.value;
    setSearchKey(newSearchKey);

    // Filter reservations based on the search key (NIC)
    const filteredReservations = reservations.filter((reservation) =>
      reservation.nic.includes(newSearchKey)
    );

    setFilteredReservations(filteredReservations); // Update filtered reservations
  };

  const handleDelete = async (reservationId, reservationDate) => {
    const daysUntilReservation =
      (new Date(reservationDate) - new Date()) / (1000 * 60 * 60 * 24);

    if (daysUntilReservation < 5) {
      // Check if it's at least 5 days before the reservation date
      setError(
        "Reservations can only be canceled at least 5 days before the reservation date."
      );
      // Display an alert message
      alert(
        "Reservations can only be canceled at least 5 days before the reservation date."
      );
      return;
    }

    if (window.confirm("Are you sure you want to cancel this reservation?")) {
      try {
        const response = await axios.delete(
          `https://localhost:7280/api/Reservations/${reservationId}`
        );
        if (response.status === 200) {
          // Refresh the reservation data after cancellation
          retrieveReservations();
        } else {
          // Handle error (e.g., display an error message)
          setError("Failed to cancel the reservation. Please try again.");
        }
      } catch (error) {
        // Handle network error or any other unexpected errors
        console.error("Error canceling reservation:", error);
        // Display an error message
        setError(
          "An error occurred while canceling the reservation. Please try again later."
        );
      }
    }
  };

  return (
    <div>
      <TravelAgentNavbar />
      <div>
        <div style={{ width: "90%", marginLeft: 90 }}>
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
              <b>RESERVATION HISTORY</b>
            </h3>
            <br />

            <div className="col-md-3" style={{ marginRight: "1300px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search NIC"
                onChange={handleSearchArea}
              />
              <br />
            </div>
            <div
              className="buttons"
              style={{
                position: "absolute",
                right: 0,
                margin: "-60px",
              }}
            >
              <Button
                variant="contained"
                style={{
                  background: "#006A4E",
                  flex: "1",
                  color: "#ffff",
                  marginRight: "150px",
                  borderRadius: 5,
                }}
                href="/bookingTickets"
                disableElevation
                type="submit"
              >
                <b>Booking Tickets</b>
              </Button>
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
                    <font color="#fff">Reservation Date</font>
                  </th>
                  <th>
                    <font color="#fff">Booking Date</font>
                  </th>
                  <th>
                    <font color="#fff">NIC</font>
                  </th>
                  <th>
                    <font color="#fff">From Station</font>
                  </th>
                  <th>
                    <font color="#fff">To Station</font>
                  </th>
                  <th>
                    <font color="#fff">No Of Seats</font>
                  </th>
                  <th>
                    <font color="#fff">Edit</font>
                  </th>
                  <th>
                    <font color="#fff">Cancel</font>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredReservations.map((reservation, index) => (
                  <tr key={reservation.trainName}>
                    <th scope="row">{index + 1}</th>
                    <td>{reservation.trainName}</td>
                    <td>
                      {new Date(
                        reservation.reservationDate
                      ).toLocaleDateString()}
                    </td>
                    <td>
                      {new Date(reservation.bookingDate).toLocaleDateString()}
                    </td>
                    <td>{reservation.nic}</td>
                    <td>{reservation.fromStation}</td>
                    <td>{reservation.toStation}</td>
                    <td>{reservation.numberOfSeats}</td>
                    <td>
                      <Button
                        style={{
                          background: "#2E8B57",
                          flex: "1",
                          color: "#ffff",
                          marginRight: "10px",
                          borderRadius: 5,
                        }}
                        href={`/Reservations/${reservation.id}`}
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
                        onClick={() =>
                          handleDelete(
                            reservation.id,
                            reservation.reservationDate
                          )
                        }
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
    </div>
  );
}
