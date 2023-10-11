import React from "react";
import TravelAgentNavbar from "../Layouts/TravelAgentNavbar";
import Footer from "../Layouts/footer";

export default function TermsConditions() {
  return (
    <div>
      <TravelAgentNavbar />
      <div className="container" style={{ marginTop: 70 }}>
        <h1 className="display-4">Terms &amp; Conditions</h1>
        <div
          className="black_box_faq"
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          <br />
          <h6
            className="faq_style"
            align="left"
            style={{
              color: "#000",
              marginTop: "30px",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            GENERAL TERMS AND CONDITIONS APPLICABLE FOR USE OF THE ONLINE SEAT
            RESERVATION SERVICE OF SRI LANKA RAILWAYS.
          </h6>
          <br />
          <div
            className="accordion"
            style={{ color: "#000", fontSize: "14px" }}
          >
            01. Prior to making a reservation through the Service, you are
            strongly advised to be vigilant of the following guidelines and
            comply with the same;
            <font style={{ color: "#000", fontSize: "14px" }}>
              <ul>
                <li>Select the correct train for your journey.</li>
                <li>Fix a convenient date for both up &amp; down journeys.</li>
                <li>
                  Ensure that you have a thorough understanding of the rates
                  applicable.
                </li>
                <li>Maximum of 5 seats could be reserved at once.</li>
                <li>
                  Standard customer verification and other terms and conditions
                  would apply.
                </li>
                <li>
                  NIC numbers of each and every passenger except "DEPENDENT"
                  should be furnished.
                </li>
                <li>
                  A reference number along with ticket details will be sent via
                  email to commuters who make the reservation via the website
                  and/or mobile app.
                </li>
                <li>
                  Commuters are requested to present the booking reference
                  number for ticket printing purposes and notify any enquiries
                  related to their reservation to the railway officer at the
                  counters. Tickets can be printed at any existing ticket
                  printing location of Sri Lanka Railways (Please click Ticket
                  printing locations tab) and it is recommended to get printed
                  the ticket in advance.
                </li>
                <li>
                  Passengers must provide the booking reference number along
                  with their NIC or passport in person at the Station Counter
                  and ticket will not be issued to any third party.
                </li>
                <li>
                  A reservation only becomes guaranteed once full payment has
                  been received by Sri Lanka Railways.
                </li>
                <li>
                  No fresh tickets will be issued in lieu of misplaced or lost
                  tickets.
                </li>
                <li>
                  The reserved tickets could be used only for specified trains.
                </li>
                <li>
                  Travelling on any other trains by using these types of tickets
                  are strictly prohibited. An ordinary travelling ticket should
                  be purchased for travelling to a transits station to catch a
                  reserved train.
                </li>
                <li>
                  All tickets issued through the Service are the property of Sri
                  Lanka Railways. Tickets are non-transferable and should be
                  handed over to the destination station before leaving the
                  station after the journey. Sri Lanka Railways officers have
                  the authority to request and check the tickets at any given
                  moment
                </li>
              </ul>
            </font>
          </div>
          <br /> <br />
          <br /> <br />
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}
