import  axios  from "axios"
export const retrieveHelloWorldApi = () =>  
axios.get('http://localhost:8084/hello-world/')