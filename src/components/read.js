import React, { useEffect, useState } from "react";
import { Table, Button, LabelGroup, Label } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { instance } from "./Axios";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  const [loading, setLoading] = useState(false);

  //Using - Axios Instance - Instance created in one place and utilized in all over application
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(
          `/GetAllEmployees`
        );
        if (response.status === 200) {
          setAPIData(response.data);
          setLoading(true);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);



  //*****Axios using Interceptors.
  //Interceptors used to config before request and after response
  // axios.defaults.baseURL = 'http://localhost:8888/api/Employee'

  //Modifying request Authorization key in runtime(dynamic)
  // axios.interceptors.request.use((config) => {
  //   console.log(config);
  //   return{...config,headers:{...config.headers, Authorization: "Bearer Token"}}
  // }, (error) => console.log(error)); 


//     //Modifying request Without any config data
//   axios.interceptors.request.use((config) => {
//     console.log(config);
//     return config
//   }, (error) => console.log(error)); 

//  //Modifying response from service call
//  axios.interceptors.response.use((response) => {
//   //Taking response into data and adding title in response
//   return {...response, data:{ resp: response.data, title : "apiResponse"}}
//   console.log(response);
// }, (error) => console.log(error));  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `/GetAllEmployees`
  //       );
  //       if (response.status === 200) {
  //         setAPIData(response.data);
  //         setLoading(true);
  //       } else {
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  //Using - Axios base url - Default Configurations
  //This will set up axios baseurl in the app.js and we can use it with in applications // No need to create an Instance.
  //Not only base url we can set baseurl, Timeout and other all configs.
  // axios.defaults.baseURL = 'http://localhost:8888/api/Employee'
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `/GetAllEmployees`
  //       );
  //       if (response.status === 200) {
  //         setAPIData(response.data);
  //         setLoading(true);
  //       } else {
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);


  // //Async
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:8888/api/Employee/GetAllEmployees`
  //       );
  //       if (response.status === 200) {
  //         setAPIData(response.data);
  //         setLoading(true);
  //       } else {
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  //Another way of AXIOS Call
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios({ method : "get",
  //        url : "http://localhost:8888/api/Employee/GetAllEmployees"
  //     });
  //       if (response.status === 200) {
  //         setAPIData(response.data);
  //         setLoading(true);
  //       } else {
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  //Sample Passing Headers in Request
  // const token = 'Test'
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:8888/api/Employee/GetAllEmployees`,{
  //           headers:{
  //             Authorization: `Bearer ${token}`
  //           }
  //         }
  //       );
  //       if (response.status === 200) {
  //         setAPIData(response.data);
  //         setLoading(true);
  //       } else {
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const getData = () => {
    try {
      axios
        .get(`http://localhost:8888/api/Employee/GetAllEmployees`)
        .then((response) => {
          setAPIData(getData.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = (data) => {
    console.log(data);
    //assigning values to variable
    let {
      employeeId,
      employeeFirstName,
      employeeLastName,
      designation,
      salary,
    } = data;

    localStorage.setItem("ID", employeeId);
    localStorage.setItem("First Name", employeeFirstName);
    localStorage.setItem("Last Name", employeeLastName);
    localStorage.setItem("Designation", designation);
    localStorage.setItem("Salary", salary);
  };

  const onDelete = (employeeId) => {
    axios
      .delete(
        `http://localhost:8888/api/Employee/DeleteEmployee?id=${employeeId}`
      )
      .then(() => {
        getData();
      });
  };

  return (
    <>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Designation</Table.HeaderCell>
            <Table.HeaderCell>Salary</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {}
          {!loading ? (
            <div>
              {" "}
              <Table.Row>
                <Table.Cell>Data Loading...</Table.Cell>
              </Table.Row>{" "}
            </div>
          ) : (
            APIData.map((data) => {
              return (
                <Table.Row key={data.employeeId}>
                  <Table.Cell>
                    {data.employeeFirstName != null
                      ? data.employeeFirstName
                      : ""}
                  </Table.Cell>
                  <Table.Cell>
                    {data.employeeLastName != null ? data.employeeLastName : ""}
                  </Table.Cell>
                  <Table.Cell>
                    {data.designation != null ? data.designation : ""}
                  </Table.Cell>
                  <LabelGroup tag>
                    <Table.Cell>
                      <Label as="a">
                        {data.salary != null ? data.salary : "0"}
                      </Label>
                    </Table.Cell>
                  </LabelGroup>
                  <Table.Cell>
                    <Link to="/update">
                      <Button primary onClick={() => setData(data)}>
                        Update
                      </Button>
                    </Link>
                  </Table.Cell>

                  <Table.Cell>
                    <Button negative onClick={() => onDelete(data.employeeId)}>
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })
          )}
        </Table.Body>
      </Table>
    </>
  );
}
