import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { instance } from "./Axios";
export default function Update() {
  let navigate = useNavigate();

  const [employeeFirstName, setEmployeeFirstName] = useState("");
  const [employeeLastName, setEmployeeLastName] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState(0);
  const [employeeId, setEmployeeId] = useState(0);

  useEffect(() => {
    setEmployeeId(localStorage.getItem("ID"));
    setEmployeeFirstName(localStorage.getItem("First Name"));
    setEmployeeLastName(localStorage.getItem("Last Name"));
    setDesignation(localStorage.getItem("Designation"));
    setSalary(localStorage.getItem("Salary"));
  }, []);

  const updateAPIData = async () => {
    try {
      if (
        employeeFirstName.length > 0 &&
        employeeLastName.length &&
        salary > 0 &&
        designation.length > 0
      ) {
        const response = await instance.post(`/SaveEmployees`, {
          employeeId,
          employeeFirstName,
          employeeLastName,
          designation,
          salary,
        });
        if (response.status === 200) {
          navigate("/read");
        }
      } else {
        alert("Fill All Details!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const homePageNavigate = () => {
    navigate("/read");
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={employeeFirstName}
            onChange={(e) => setEmployeeFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={employeeLastName}
            onChange={(e) => setEmployeeLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Designation</label>
          <input
            placeholder="Designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input
            placeholder="Salary"
            value={salary}
            type="number"
            onChange={(e) => setSalary(e.target.value)}
          />
        </Form.Field>
        <Button positive type="submit" onClick={updateAPIData}>
          Update
        </Button>
        <Button negative type="submit" onClick={homePageNavigate}>
          Cancel
        </Button>
      </Form>
    </div>
  );
}
