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
import History from "./Components/Pages/History";
import Contactus from "./Components/Pages/Contactus";
import TermsConditions from "./Components/Pages/TermsConditions";
import TravelerRegistration from "./Components/TravelAgent/TravelerRegistration";
import Profile from "./Components/TravelAgent/Profile";
import BackOfficerProfile from "./Components/Back-Officer/BackOfficerProfile";
import ReservationHistory from "./Components/TravelAgent/ReservationHistory";
import UpdateBookingTickets from "./Components/TravelAgent/UpdateBookingTickets";
import GetTravelersDetails from "./Components/TravelAgent/GetTravelersDetails";
import UpdateTravelers from "./Components/TravelAgent/UpdateTravelers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/backofficerhome" element={<BackOfficerHome />} />
        <Route path="/addTrainSchedule" element={<AddTrainSchedule />} />
        <Route path="/Trains/:trainID" element={<UpdateTrainSchedule />} />
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
        <Route path="/history" element={<History />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/termsconditions" element={<TermsConditions />} />
        <Route
          path="/travelerRegistration"
          element={<TravelerRegistration />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/backofficerprofile" element={<BackOfficerProfile />} />
        <Route path="/reservationHistory" element={<ReservationHistory />} />

        <Route
          path="/Reservations/:reservationID"
          element={<UpdateBookingTickets />}
        />
        <Route path="/travelerDetails" element={<GetTravelersDetails />} />
        <Route path="/Traveler/:travelerID" element={<UpdateTravelers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
