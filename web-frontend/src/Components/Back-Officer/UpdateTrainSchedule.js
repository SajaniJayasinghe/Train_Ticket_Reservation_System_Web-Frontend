import React from "react";
import UserNavBar from "../Layouts/UserNavBar";
import Footer from "../Layouts/footer";
import Button from "@material-ui/core/Button";

export default function UpdateTrainSchedule() {
  const trainStations = ["Station A", "Station B", "Station C", "Station D"];
  const trainStatus = ["Available", "Unavailable"];

  return (
    <div>
      <UserNavBar />
      <div
        class="row d-flex align-items-center justify-content-center"
        style={{ marginTop: 100 }}
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
            <form>
              <div className="col-md-6" style={{ marginTop: 60 }}>
                <h2>Update Train Schedule</h2>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "29%",
                  left: "65%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img
                  src="https://res.cloudinary.com/nibmsa/image/upload/v1696825236/showcasing-new-transportation-company-social-media-post-spotlighting-dynamic-lines_916191-74389_nsojs0-removebg-preview_otwavo.png"
                  alt="Train Schedule Icon"
                  style={{ width: "70%", height: "auto" }}
                />
              </div>
              <div class="row">
                <div class="form-group col-md-6" style={{ marginTop: 60 }}>
                  1. Train Name
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Train name"
                  />
                </div>
                <div class="form-group col-md-6" style={{ marginTop: 60 }}>
                  2. Train Number
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Train number"
                  />
                </div>
                <div class="form-group col-md-6" style={{ marginTop: 14 }}>
                  3. Number of Seats
                  <input
                    type="text"
                    class="form-control"
                    placeholder=" Number of Seats"
                  />
                </div>
                <div class="form-group col-md-6" style={{ marginTop: 14 }}>
                  4. Train Stations
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Train stations"
                  />
                </div>
                <div class="form-group col-md-6" style={{ marginTop: 14 }}>
                  <label>5. Select Station:</label>
                  <select name="selectedStation" className="form-control">
                    <option value="">Select a station</option>
                    {trainStations.map((station, index) => (
                      <option key={index} value={station}>
                        {station}
                      </option>
                    ))}
                  </select>
                </div>
                <div class="form-group col-md-6" style={{ marginTop: 14 }}>
                  <label>5. Select Status:</label>
                  <select name="selectedStatus" className="form-control">
                    <option value="">Select a status</option>
                    {trainStatus.map((status, index) => (
                      <option key={index} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="row">
                  <div className="col-md">
                    <Button
                      type="submit"
                      style={{
                        background: "#3090C7",
                        width: "40%",
                        marginLeft: "380px",
                        height: "auto",
                        color: "BLACK",
                        borderRadius: 5,
                        fontSize: "15px",
                        marginTop: "40px",
                      }}
                    >
                      <i className="fa fa-check-circle"></i>&nbsp;{" "}
                      <b>Update Train</b>
                    </Button>
                  </div>
                  <div className="col-md">
                    <Button
                      type="submit"
                      style={{
                        marginLeft: "105px",
                        background: "#FFA500",
                        width: "60%",
                        height: "auto",
                        color: "BLACK",
                        fontSize: "15px",
                        borderRadius: 5,
                        marginTop: "40px",
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
