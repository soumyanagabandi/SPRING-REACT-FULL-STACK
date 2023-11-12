import  axios  from "axios"

const appClient = axios.create (
    {
        baseURL : 'http://localhost:8082'
    }
)
export const retrieveAllTodosForUsernameApi = (username) =>  
appClient.get(`/users/${username}/todos`)
export const deleteTodoApi =(username, id) =>
appClient.delete(`/users/${username}/todos/${id}`)
export const retrieveTodoApi = (username, id) =>
appClient.get(`users/${username}/todos/${id}`)
export const updateTodoApi = (username, id, todo) =>
appClient.put(`users/${username}/todos/${id}`,todo)