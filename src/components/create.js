import React, { useState } from "react";
import { FormField, Button, Checkbox, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { instance } from "./Axios";

export default function Create() {
  let navigate = useNavigate();
  const [employeeFirstName, setEmployeeFirstName] = useState("");
  const [employeeLastName, setEmployeeLastName] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState(0);
  const [employeesMaster, setEmployeesMaster] = useState([]);

  var empId = 0;

  const postData = async () => {
    try {
      if (
        employeeFirstName.length > 0 &&
        employeeLastName.length &&
        salary > 0 &&
        designation.length > 0
      ) {
        const response = await instance.post(`/SaveEmployees`, {
          empId,
          employeeFirstName,
          employeeLastName,
          salary,
          designation,
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

  return (
    <Form>
      <FormField>
        <label>First Name</label>
        <input
          required
          placeholder="First Name"
          onChange={(e) => setEmployeeFirstName(e.target.value)}
        />
      </FormField>
      <FormField>
        <label>Last Name</label>
        <input
          required
          placeholder="Last Name"
          onChange={(e) => setEmployeeLastName(e.target.value)}
        />
      </FormField>
      <FormField>
        <label>Designation</label>
        <input
          required
          placeholder="Designation"
          onChange={(e) => setDesignation(e.target.value)}
        />
      </FormField>
      <FormField>
        <label>Salary</label>
        <input
          required
          placeholder="Salary"
          type="number"
          onChange={(e) => setSalary(e.target.value)}
        />
      </FormField>
      <Button type="submit" onClick={postData}>
        Submit
      </Button>
    </Form>
  );
}
