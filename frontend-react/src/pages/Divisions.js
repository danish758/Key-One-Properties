import React from "react";
import salesTeam from "../assets/sales.jpg";
import propertyTeam from "../assets/property.jpg";
import marketingTeam from "../assets/marketing.jpg";
import { useNavigate } from "react-router-dom";

const divisions = [
  {
    id: 1,
    title: "Sales Team",
    image: salesTeam,
    department: "Sales",
  },
  {
    id: 2,
    title: "IT Team",
    image: propertyTeam,
    department: "IT",
  },
  {
    id: 3,
    title: "Marketing Team",
    image: marketingTeam,
    department: "Marketing",
  },
];

const Divisions = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="heading">Our Teams</h2>
      <div className="divisions">
        {divisions.map((division) => (
          <div
            className="division"
            onClick={() =>
              navigate("/employees", {
                state: {
                  team: division.department,
                },
              })
            }
          >
            <div className="cardImageDiv">
              <img
                className="cardImage"
                src={division.image}
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="cardContent">
              <h4>{division.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Divisions;
