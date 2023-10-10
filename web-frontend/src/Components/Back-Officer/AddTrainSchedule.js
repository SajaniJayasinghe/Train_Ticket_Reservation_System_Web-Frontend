// import React from "react";
// import UserNavBar from "../Layouts/UserNavBar";
// import Footer from "../Layouts/footer";
// import Button from "@material-ui/core/Button";

// export default function AddTrainSchedule() {
//   return (
//     <div>
//       <UserNavBar />
//       <div
//         class="row d-flex align-items-center justify-content-center"
//         style={{ marginTop: 100 }}
//       >
//         <div
//           style={{
//             width: 800,
//             background: "#DBE9FA",
//             height: 500,
//             borderRadius: "20px",
//           }}
//         >
//           <div class="card-body">
//             <form>
//               <div className="col-md-6" style={{ marginTop: 60 }}>
//                 <h2>Add Train Schedule</h2>
//               </div>
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "30%",
//                   left: "64%",
//                   transform: "translate(-50%, -50%)",
//                 }}
//               >
//                 <img
//                   src="https://res.cloudinary.com/nibmsa/image/upload/v1696825236/showcasing-new-transportation-company-social-media-post-spotlighting-dynamic-lines_916191-74389_nsojs0-removebg-preview_otwavo.png"
//                   alt="Train Schedule Icon"
//                   style={{ width: "70%", height: "auto" }}
//                 />
//               </div>
//               <div class="row">
//                 <div class="form-group  col-md-6" style={{ marginTop: 60 }}>
//                   1. Train Name
//                   <input
//                     type="text"
//                     class="form-control"
//                     placeholder="Train name"
//                   />
//                 </div>
//                 <div class="form-group col-md-6" style={{ marginTop: 60 }}>
//                   2. Train Number
//                   <input
//                     type="text"
//                     class="form-control"
//                     placeholder="Train number"
//                   />
//                 </div>
//                 <div class="form-group col-md-6" style={{ marginTop: 14 }}>
//                   3. Number of Seats
//                   <input
//                     type="number"
//                     class="form-control"
//                     placeholder=" Number of Seats"
//                   />
//                 </div>
//                 <div class="form-group col-md-6" style={{ marginTop: 14 }}>
//                   <label>4. Unit Price</label>
//                   <input
//                     type="text"
//                     class="form-control"
//                     placeholder="Unit price"
//                   />
//                 </div>
//                 <div class="form-group" style={{ marginTop: 14 }}>
//                   5. Train Stations
//                   <input
//                     type="text"
//                     class="form-control"
//                     placeholder="Train stations"
//                   />
//                 </div>

//                 <div className="row">
//                   <div className="col-md">
//                     <Button
//                       type="submit"
//                       style={{
//                         background: "#3090C7",
//                         width: "40%",
//                         marginLeft: "400px",
//                         height: "auto",
//                         color: "BLACK",
//                         borderRadius: 5,
//                         fontSize: "15px",
//                         marginTop: "40px",
//                       }}
//                     >
//                       <i className="fa fa-check-circle"></i>&nbsp;{" "}
//                       <b>Add Train</b>
//                     </Button>
//                   </div>
//                   <div className="col-md">
//                     <Button
//                       type="submit"
//                       style={{
//                         marginLeft: "105px",
//                         background: "#FFA500",
//                         width: "60%",
//                         height: "auto",
//                         color: "BLACK",
//                         fontSize: "15px",
//                         borderRadius: 5,
//                         marginTop: "40px",
//                       }}
//                     >
//                       <i className="fa fa-times-circle"></i>&nbsp;<b> CANCEL</b>
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <br /> <br /> <br />
//       <Footer />
//     </div>
//   );
// }

import React, { useState } from "react";
import UserNavBar from "../Layouts/UserNavBar";
import Footer from "../Layouts/footer";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function AddTrainSchedule() {
  const [TrainName, setTrainName] = useState("");
  const [TrainNumber, setTrainNumber] = useState("");
  const [TrainSeats, setTrainSeats] = useState(0);
  const [UnitPrice, setUnitPrice] = useState(0);
  const [Stations, setStations] = useState([]);
  const [IsActive, setIsActive] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object to send to the API
    const newTrain = {
      TrainName,
      TrainNumber,
      TrainSeats,
      UnitPrice,
      Stations,
      IsActive,
    };

    // Send the data to the API endpoint for creating a train
    axios
      .post("https://localhost:7280/api/Trains", newTrain)
      .then((response) => {
        // Handle the response or perform any necessary actions
        console.log("Train added successfully", response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error adding train", error);
      });
  };

  return (
    <div>
      <UserNavBar />
      <div
        className="row d-flex align-items-center justify-content-center"
        style={{ marginTop: 80 }}
      >
        <div
          style={{
            width: 800,
            background: "#DBE9FA",
            height: 570,
            borderRadius: "20px",
          }}
        >
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="col-md-6" style={{ marginTop: 60 }}>
                <h2>Add Train Schedule</h2>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "25%",
                  left: "64%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img
                  src="https://res.cloudinary.com/nibmsa/image/upload/v1696825236/showcasing-new-transportation-company-social-media-post-spotlighting-dynamic-lines_916191-74389_nsojs0-removebg-preview_otwavo.png"
                  alt="Train Schedule Icon"
                  style={{ width: "70%", height: "auto" }}
                />
              </div>
              <div className="row">
                <div className="form-group col-md-6" style={{ marginTop: 60 }}>
                  1. Train Name
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Train name"
                    value={TrainName}
                    onChange={(e) => setTrainName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6" style={{ marginTop: 60 }}>
                  2. Train Number
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Train number"
                    value={TrainNumber}
                    onChange={(e) => setTrainNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6" style={{ marginTop: 14 }}>
                  3. Number of Seats
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Number of Seats"
                    value={TrainSeats}
                    onChange={(e) => {
                      const newValue = Math.min(
                        Math.max(parseInt(e.target.value), 1),
                        5
                      );
                      setTrainSeats(newValue);
                    }}
                    required
                    min="1" // Minimum value
                  />
                </div>

                <div className="form-group col-md-6" style={{ marginTop: 14 }}>
                  4. Unit Price
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Unit price"
                    value={UnitPrice}
                    onChange={(e) => setUnitPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginTop: 14 }}>
                  5. Train Stations
                  <select
                    className="form-control"
                    value={Stations}
                    onChange={(e) => setStations(e.target.value)}
                  >
                    <option value="Select">Select</option>
                    <option value="">A</option>
                    <option value="B">B</option>
                  </select>
                </div>

                <div className="form-group col-md-6" style={{ marginTop: 14 }}>
                  6. Status
                  <select
                    className="form-control"
                    value={IsActive}
                    onChange={(e) => setIsActive(e.target.value === "true")}
                  >
                    <option value="true">Available</option>
                  </select>
                </div>

                <div className="form-group col-md-6" style={{ marginTop: 14 }}>
                  7. Time
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Train Time"
                    required
                  />
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
                        marginTop: "25px",
                      }}
                    >
                      <i className="fa fa-check-circle"></i>&nbsp;{" "}
                      <b>Add Train</b>
                    </Button>
                  </div>
                  <div className="col-md">
                    <Button
                      type="button"
                      style={{
                        marginLeft: "105px",
                        background: "#FFA500",
                        width: "60%",
                        height: "auto",
                        color: "BLACK",
                        fontSize: "15px",
                        borderRadius: 5,
                        marginTop: "25px",
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
