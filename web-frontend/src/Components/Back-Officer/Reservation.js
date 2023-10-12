import React, { useState, useEffect } from "react";
import UserNavBar from "../Layouts/UserNavBar";
import axios from "axios";

export default function Reservation() {
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
        const reservationsData = res.data.map((reservation) => ({
          ...reservation,
          // Format the dates to display only the date part
          reservationDate: new Date(
            reservation.reservationDate
          ).toLocaleDateString(),
          bookingDate: new Date(reservation.bookingDate).toLocaleDateString(),
        }));
        setReservations(reservationsData);
        setFilteredReservations(reservationsData); // Initialize filtered reservations with all reservations
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

  return (
    <div>
      <UserNavBar />
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
              <b>TRAIN BOOKINGS</b>
            </h3>
            <br />
            <div className="col-md-3" style={{ marginRight: "1300px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search NIC"
                onChange={handleSearchArea} // Use handleSearchArea function
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
                    <font color="#fff">Train ID</font>
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
                </tr>
              </thead>
              <tbody>
                {filteredReservations.map((reservation, index) => (
                  <tr key={reservation.trainName}>
                    <th scope="row">{index + 1}</th>
                    <td>{reservation.train}</td>
                    <td>{reservation.trainName}</td>
                    <td>{reservation.reservationDate}</td>
                    <td>{reservation.bookingDate}</td>
                    <td>{reservation.nic}</td>
                    <td>{reservation.fromStation}</td>
                    <td>{reservation.toStation}</td>
                    <td>{reservation.numberOfSeats}</td>
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
