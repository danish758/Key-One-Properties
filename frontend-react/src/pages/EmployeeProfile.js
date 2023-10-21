import React from "react";
import propertyTeam from "../assets/property.jpg";
import { useLocation, useNavigate } from "react-router-dom";

const EmployeeProfile = () => {
  const navigate = useNavigate();
  const {
    state: { employee },
  } = useLocation();
  const auth = localStorage.getItem("employee");
  return (
    <div>
      <div className="divisions">
        <div className="division">
          <div className="cardImageDiv">
            <img
              className="cardImage"
              src={propertyTeam}
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="cardContent">
            <h4>
              {employee?.first_name} {employee?.last_name}
            </h4>
            <h4>{employee?.email}</h4>
            <h4>{employee?.role}</h4>
            <h4>{employee?.department}</h4>
          </div>
        </div>
      </div>
      {/* {auth && (
        <div style={{ textAlign: "center" }}>
          <button
            className="button"
            onClick={() =>
              navigate(`/employees/${employee?.id}/edit`, {
                state: { employee },
              })
            }
          >
            Edit
          </button>
        </div>
      )} */}
    </div>
  );
};

export default EmployeeProfile;
