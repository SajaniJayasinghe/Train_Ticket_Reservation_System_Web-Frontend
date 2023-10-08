import React from "react";
import UserNavBar from "../Layouts/UserNavBar";
import Footer from "../Layouts/footer";
import Button from "@material-ui/core/Button";

export default function AddTrainSchedule() {
  const trainStations = ["Station A", "Station B", "Station C", "Station D"];

  return (
    <div>
      <UserNavBar />
      <div
        class="row d-flex align-items-center justify-content-center"
        style={{ marginTop: 60 }}
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
              <h2 style={{ marginTop: 20, marginBottom: 20 }}>
                Add Train Schedule
              </h2>
              <div class="row">
                <div class="form-group col-md-6" style={{ marginTop: 14 }}>
                  1. Train Name
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Train name"
                  />
                </div>
                <div class="form-group col-md-6" style={{ marginTop: 14 }}>
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
                {/* <div class="form-group" style={{ marginTop: 14 }}>
                  5. Train Stations
                  <input
                    type="text"
                    class="form-control"
                    placeholder=" Train Stations"
                  />
                </div> */}
                <div className="form-group" style={{ marginTop: 14 }}>
                  <label>5. Select Station:</label>
                  <select
                    name="selectedStation"
                    // value={this.state.selectedStation}
                    // onChange={this.handleChange}
                    className="form-control"
                  >
                    <option value="">Select a station</option>
                    {trainStations.map((station, index) => (
                      <option key={index} value={station}>
                        {station}
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
                        marginLeft: "400px",
                        height: "auto",
                        color: "BLACK",
                        borderRadius: 5,
                        fontSize: "15px",
                        marginTop: "50px",
                      }}
                    >
                      <i className="fa fa-check-circle"></i>&nbsp;{" "}
                      <b>Add Train</b>
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
                        marginTop: "50px",
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
