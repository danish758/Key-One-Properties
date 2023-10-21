import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ children }) => {
  const navigate = useNavigate();
  const employee = JSON.parse(localStorage.getItem("employee"));
  console.log("employee", employee);
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {!employee ? (
          <button className="button" onClick={() => navigate("/login")}>
            Login
          </button>
        ) : (
          <div style={{ textAlign: "center" }}>
            <button
              className="button"
              onClick={() =>
                navigate(`/employees/${employee?.id}/edit`, {
                  state: { employee },
                })
              }
            >
              Edit My Profile
            </button>
          </div>
        )}
      </div>
      {children}
    </>
  );
};

export default Header;
