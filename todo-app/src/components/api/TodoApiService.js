import  axios  from "axios"
export const retrieveAllTodosForUsername = (username) =>  
axios.get(`http://localhost:8086/users/${username}/todos`)