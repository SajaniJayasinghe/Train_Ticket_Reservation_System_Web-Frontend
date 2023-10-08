import React from "react";
import Footer from "../Layouts/footer";
import NavBar from "../Layouts/NavBar";
import Button from "@material-ui/core/Button";

export default function Registration() {
  return (
    <div>
      <NavBar />
      <div>
        <div className="row d-flex align-items-center justify-content-center">
          <div
            style={{
              width: 1000,
              background: "#DCEAFB",
              height: 600,
              marginTop: 60,
              borderRadius: "20px",
            }}
          >
            <div className="card-body">
              <form action="" method="post" name="form">
                <div className="row g-0">
                  <div className="col-xl-7 d-none d-xl-block">
                    <br />
                    <br />
                    <h3 style={{ marginLeft: "60px", marginTop: -20 }}>
                      <b>TRAVEL AGENT&nbsp;&nbsp;REGISTERATION</b>
                    </h3>
                    <br />
                    <br />
                    <img
                      src="https://eticket.railway.gov.bd/v2/assets/img/home/search.svg"
                      style={{ width: 390, marginLeft: 60, marginTop: -20 }}
                    />
                  </div>

                  <div className="col-xl-5">
                    <div className="form-outline mb-2">
                      <br />
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px" }}
                      >
                        <i className="fa fa-user"></i>&nbsp;&nbsp;&nbsp;First
                        Name
                      </span>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-outline mb-2">
                      <br />
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px" }}
                      >
                        <i className="fa fa-user"></i>&nbsp;&nbsp;&nbsp;Last
                        Name
                      </span>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-outline mb-2">
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px" }}
                      >
                        <i className="fa fa-envelope"></i>
                        &nbsp;&nbsp;&nbsp;Email Address
                      </span>
                      <div className="col-md-10">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your E-mail address"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-outline mb-2">
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px" }}
                      >
                        <i className="fa fa-address-card"></i>
                        &nbsp;&nbsp;&nbsp;NIC
                      </span>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your NIC number"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-outline mb-2">
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px" }}
                      >
                        <i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;Phone
                        Number
                      </span>
                      <div className="col-md-10">
                        <input
                          type="text"
                          className="form-control"
                          pattern="[0-9]{10}"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-outline mb-2">
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px" }}
                      >
                        <i className="fa fa-key" aria-hidden="true"></i>
                        &nbsp;&nbsp;&nbsp;Password
                      </span>
                      <div className="col-md-10">
                        <input
                          type="password"
                          placeholder="Enter your password"
                          className="form-control"
                          data-toggle="tooltip"
                          data-placement="center"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-outline mb-2">
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px" }}
                      >
                        <i className="fa fa-unlock-alt"></i>
                        &nbsp;&nbsp;&nbsp;Confirm Password
                      </span>
                      <div className="col-md-10">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter your confirm password"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md">
                        <Button
                          type="submit"
                          style={{
                            background: "#8BC0FF",
                            width: "80%",
                            height: "auto",
                            color: "BLACK",
                            borderRadius: 20,
                            marginTop: "10px",
                          }}
                        >
                          <i className="fa fa-check-circle"></i>&nbsp; SIGN UP
                        </Button>
                      </div>
                      <div className="col-md">
                        <Button
                          type="submit"
                          style={{
                            marginLeft: "-30px",
                            background: "#368BC1",
                            width: "80%",
                            height: "auto",
                            color: "BLACK",
                            borderRadius: 20,
                            marginTop: "10px",
                          }}
                        >
                          <i className="fa fa-times-circle"></i>&nbsp; CANCEL
                        </Button>
                      </div>
                    </div>
                    <div className="d-flex justify-left pt-1">
                      <span
                        id="passwordHelpInline"
                        className="form-text"
                        style={{ marginBottom: "2px", marginTop: "10px" }}
                      >
                        Already Registered? &nbsp;&nbsp;
                      </span>
                      <a
                        style={{ marginBottom: "2px", marginTop: "6px" }}
                        href="/signin"
                      >
                        Sign In
                      </a>{" "}
                    </div>
                    <br />
                  </div>
                </div>
              </form>
            </div>
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
