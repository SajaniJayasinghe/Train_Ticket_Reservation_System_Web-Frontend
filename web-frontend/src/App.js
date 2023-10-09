import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Pages/LandingPage";
import LoginPage from "./Components/Pages/LoginPage";
import Registration from "./Components/TravelAgent/Registration";
import BackOfficerHome from "./Components/Back-Officer/HomePage";
import AddTrainSchedule from "./Components/Back-Officer/AddTrainSchedule";
import UpdateTrainSchedule from "./Components/Back-Officer/UpdateTrainSchedule";
import TravelerAccountManage from "./Components/Back-Officer/TravelerAccountManage";
import TravelAgentHome from "./Components/TravelAgent/HomePage";
import BackofficerReservation from "./Components/Back-Officer/Reservation";
import BookingTickets from "./Components/TravelAgent/BookingTickets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/backofficerhome" element={<BackOfficerHome />} />
        <Route path="/addTrainSchedule" element={<AddTrainSchedule />} />
        <Route path="/updateTrainSchedule" element={<UpdateTrainSchedule />} />
        <Route path="/travelAgentHome" element={<TravelAgentHome />} />
        <Route
          path="/travelerAccountManage"
          element={<TravelerAccountManage />}
        />
        <Route
          path="/backofficerreservation"
          element={<BackofficerReservation />}
        />
        <Route path="/bookingTickets" element={<BookingTickets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
