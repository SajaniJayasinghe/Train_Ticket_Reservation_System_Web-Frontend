import React from "react";
import Footer from "../Layouts/footer";
import TravelAgentNavbar from "../Layouts/TravelAgentNavbar";

export default function Contactus() {
  return (
    <div>
      <TravelAgentNavbar />
      <div className="container" style={{ marginTop: 50 }}>
        <h1 className="display-4">Contact Us</h1>
        <form
          className="needs-validation"
          action="contact"
          method="post"
          noValidate
          id="contact_Modal"
        >
          <fieldset>
            <div
              className="form-group col-lg-6 col-md-8 col-sm-12"
              style={{ marginTop: 20 }}
            >
              <label htmlFor="exampleInputEmail2">Your Name</label>
              <input
                type="text"
                name="cusName"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
                required
              />
              <div className="invalid-feedback">Please enter name</div>
            </div>
            <div
              className="form-group col-lg-6 col-md-8 col-sm-12"
              style={{ marginTop: 20 }}
            >
              <label htmlFor="exampleInputEmail1">Your Email</label>
              <input
                type="email"
                name="cusEmail"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
              <div className="invalid-feedback">Please enter email</div>
            </div>
            <div
              className="form-group col-lg-6 col-md-8 col-sm-12"
              style={{ marginTop: 20 }}
            >
              <label htmlFor="phone">Your Mobile</label>
              {/* Hidden input for mobile number */}
              <input type="hidden" name="mobile" id="mobile_contact" />
              {/* International Telephone Input field */}
              <input
                type="tel"
                className="form-control"
                id="mobile_contact_input"
                required
              />
            </div>
            <div
              className="form-group col-lg-6 col-md-8 col-sm-12"
              style={{ marginTop: 20 }}
            >
              <label htmlFor="subject_contact">Subject</label>
              <select
                className="form-control"
                id="subject_contact"
                name="subject"
                required
              >
                <option value="">Select Complaint Subject</option>
                <option value="TI">Technical issue</option>
                <option value="PI">Payment Issue</option>
                <option value="SC">Support Case</option>
              </select>
              <div className="invalid-feedback">Please select subject</div>
            </div>
            <div id="additionalContent" style={{ display: "none" }}>
              <div
                className="form-group col-lg-6 col-md-8 col-sm-12"
                style={{ marginTop: 20 }}
              >
                <label htmlFor="exampleInputNic">NIC / Passport No</label>
                <input
                  type="text"
                  name="cusNic"
                  className="form-control"
                  id="exampleInputNic"
                  aria-describedby="nicHelp"
                  placeholder="Enter NIC / Passport No"
                  required
                />
                <div className="invalid-feedback">
                  Please enter NIC / Passport No
                </div>
              </div>
              <div
                className="form-group col-lg-6 col-md-8 col-sm-12"
                style={{ marginTop: 20 }}
              >
                <label htmlFor="exampleInputCardNo">
                  Last 4 digit of the Card No
                </label>
                <input
                  type="text"
                  name="cusCardNumber"
                  className="form-control"
                  id="exampleInputCardNo"
                  aria-describedby="cardNumberHelp"
                  placeholder="Enter Last 4 digits"
                  required
                />
                <div className="invalid-feedback">
                  Please enter last 4 digits of the card no
                </div>
              </div>
              <div
                className="form-group col-lg-6 col-md-8 col-sm-12"
                style={{ marginTop: 20 }}
              >
                <label htmlFor="exampleInputAmount">Amount</label>
                <input
                  type="text"
                  name="cusAmount"
                  className="form-control"
                  id="exampleInputAmount"
                  aria-describedby="amountHelp"
                  placeholder="Enter Amount"
                  required
                />
                <div className="invalid-feedback">Please enter amount</div>
              </div>
              <div
                className="form-group col-lg-6 col-md-8 col-sm-12"
                style={{ marginTop: 20 }}
              >
                <label htmlFor="exampleInputDate">Date</label>
                <input
                  type="date"
                  name="cusDate"
                  className="form-control"
                  id="exampleInputDate"
                  aria-describedby="dateHelp"
                  placeholder="Enter Date"
                  required
                />
                <div className="invalid-feedback">Please enter date</div>
              </div>
              <div
                className="form-group col-lg-6 col-md-8 col-sm-12"
                style={{ marginTop: 20 }}
              >
                <label htmlFor="exampleInputTime">Time</label>
                <input
                  type="time"
                  name="cusTime"
                  className="form-control"
                  id="exampleInputTime"
                  aria-describedby="timeHelp"
                  placeholder="Enter Time"
                />
              </div>
              <div
                className="form-group col-lg-6 col-md-8 col-sm-12"
                style={{ marginTop: 20 }}
              >
                <label htmlFor="exampleInputReferenceno">
                  Reference Number
                </label>
                <input
                  type="text"
                  name="cusReferenceNumber"
                  className="form-control"
                  id="exampleInputReferenceno"
                  aria-describedby="referencenoHelp"
                  placeholder="Enter Reference Number"
                />
              </div>
              <div
                className="form-group col-lg-6 col-md-8 col-sm-12"
                style={{ marginTop: 20 }}
              >
                <label htmlFor="subject_platform">Transaction Platform</label>
                <select
                  className="form-control"
                  id="subject_platform"
                  name="txn_platform"
                >
                  <option value="">Select Transaction Platform</option>
                  <option value="WEB">Web</option>
                  <option value="APP">App</option>
                </select>
              </div>
            </div>
            <div className="form-group col-lg-6 col-md-8 col-sm-12">
              <label htmlFor="exampleTextarea" style={{ marginTop: 20 }}>
                Message
              </label>
              <textarea
                className="form-control"
                name="message"
                id="exampleTextarea"
                rows="3"
                autoComplete="off"
                required
              ></textarea>
              <div className="invalid-feedback">Please enter message</div>
            </div>
            <div className="form-group col-lg-6 col-md-8 col-sm-12">
              <button
                type="submit"
                className="btn btn-primary contact-btn"
                id="contactBtn"
                style={{ marginTop: 20 }}
              >
                Send
              </button>
            </div>
          </fieldset>
        </form>
        <div
          style={{
            flex: 1,
            textAlign: "right",
            marginTop: -500,
            marginLeft: 700,
          }}
        >
          {/* Image on the right side */}
          <img
            src="https://res.cloudinary.com/nibmsa/image/upload/v1696839459/Indian-Railways-removebg-preview_efgkpz.png"
            width="780"
            height="500"
            className="d-inline-block align-top"
            alt=""
          />
        </div>
      </div>
      <br />
      <br /> <br /> <br />
      <Footer />
    </div>
  );
}
