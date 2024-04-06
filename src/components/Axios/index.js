import  axios  from "axios";


export const instance = axios.create({
    baseURL: 'http://localhost:8888/api/Employee',
    timeout : 5000,
    // headers: {
    //     headers:{
    //         "content-type" : 'application/json',
    //         "Authorization" : 'Bearer auth_token'
    //     }
    // }
});
