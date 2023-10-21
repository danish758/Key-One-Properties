import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const url = "http://127.0.0.1:8000/api/employees/login";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState("");
  const handleChange = (e) => {
    const email = e.target.value;
    setFormData(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const res = await axios.post(url, { email: formData });
    console.log("res", res);
    const employee = res?.data?.employee;
    if (employee) {
      localStorage.setItem("employee", JSON.stringify(employee));
      navigate(`/employees/${employee?.id}`, {
        state: { employee },
      });
    } else {
      console.log("No Employee found");
    }
  };

  return (
    <div className="login">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <h3 htmlFor="email">Email</h3>
            <input
              placeholder="Enter Email..."
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
