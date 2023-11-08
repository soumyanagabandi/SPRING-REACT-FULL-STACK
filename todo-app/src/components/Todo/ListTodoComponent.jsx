import { useState, useEffect } from "react";
import { retrieveAllTodosForUsername } from "../api/TodoApiService";
export default function ListTodoComponent(){
    const today = new Date();
    const [todos, setTodos] = useState([])
    useEffect (
        () => refershTodos()
    )
    function refershTodos() {
    retrieveAllTodosForUsername("soumya")
    .then( response => setTodos(response.data))
    .catch(error => console.log(error))
    }
    return(
        <div className="container">
            <h1> Things you want to Do!</h1>
            <div>
            <table className="table">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>done</td>
                            <td>targetDate</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                            <tr key = "{todo.id}">
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
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