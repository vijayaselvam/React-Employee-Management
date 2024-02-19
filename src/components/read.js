import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://localhost:7022/api/Employee/GetAllEmployees`)
      .then((response) => {
        setAPIData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  const setData = (data) => {
    console.log(data);
 }

 
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Designation</Table.HeaderCell>
            <Table.HeaderCell>Salary</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.employeeFirstName}</Table.Cell>
                <Table.Cell>{data.employeeLastName}</Table.Cell>
                <Table.Cell>{data.designation}</Table.Cell>
                <Table.Cell>{data.salary}</Table.Cell>
                
                <Link to="/update">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                </Link>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
