import React from "react";
import salesTeam from "../assets/sales.jpg";
import propertyTeam from "../assets/property.jpg";
import marketingTeam from "../assets/marketing.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import useFetchHook from "../hooks/useFetchHook";

const Employees = () => {
  const { data, loading } = useFetchHook("http://127.0.0.1:8000/api/employees");
  const {
    state: { team },
  } = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="heading">Sales Team</h2>
      <div className="divisions">
        {!loading ? (
          data?.employees.map(
            (employee, index) =>
              team === employee?.department && (
                <div
                  className="division"
                  onClick={() =>
                    navigate(`/employees/${employee.id}`, {
                      state: { employee },
                    })
                  }
                >
                  <div className="cardImageDiv">
                    <img
                      className="cardImage"
                      src={index == 0 ? salesTeam : propertyTeam}
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                  <div className="cardContent">
                    <h4>{employee?.first_name}</h4>
                  </div>
                </div>
              )
          )
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Employees;
