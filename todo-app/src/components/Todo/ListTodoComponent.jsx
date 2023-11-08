import { useState, useEffect } from "react";
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "../api/TodoApiService";
export default function ListTodoComponent(){
    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState("")
    useEffect (
        () => refershTodos()
    )
    function refershTodos() {
    retrieveAllTodosForUsernameApi("soumya")
    .then( response => setTodos(response.data))
    .catch(error => console.log(error))
    }

    function deleteTodo(id){
        console.log('clicked' + id)
        deleteTodoApi('soumya',id)
        .then(
            //1: Display Message
            () => {
            setMessage(`Delete of todo with ${id} is Successfull`)
            refershTodos()
            }
            //2: Update Todos List
        )
        .catch()
    }
    return(
        <div className="container">
            <h1> Things you want to Do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
            <table className="table">
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>done</th>
                            <th>targetDate</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                            <tr key = "{todo.id}">
        
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning" onClick={()=>deleteTodo(todo.id)}>Delete</button></td>
                                </tr>
                            )
                        )
                    }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}