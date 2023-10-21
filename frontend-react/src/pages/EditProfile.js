import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const url = "http://127.0.0.1:8000/api/employees";
function EditPage() {
  const navigate = useNavigate();
  const {
    state: { employee },
  } = useLocation();
  console.log("employee", employee);
  const [formData, setFormData] = useState({
    first_name: employee?.first_name,
    last_name: employee?.last_name,
    email: employee?.email,
    department: employee?.department,
    role: employee?.role,
    number: employee?.number,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., send the data to a server or perform other actions.
    console.log("Form submitted with data:", formData);
    const res = await axios.patch(`${url}/${employee?.id}/edit`, {
      ...formData,
    });
    if (res?.status == 200) {
      navigate(`/`);
    }
  };

  return (
    <div className="login">
      <div>
        <h1>Edit Page</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <h4 htmlFor="first_name">First Name:</h4>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <h4 htmlFor="last_name">Last Name:</h4>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <h4 htmlFor="email">Email:</h4>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <h4 htmlFor="department">Department:</h4>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <h4 htmlFor="role">Role:</h4>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <h4 htmlFor="role">Number:</h4>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
            />
          </div>

          <button className="button" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPage;
