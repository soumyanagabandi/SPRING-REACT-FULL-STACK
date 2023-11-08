import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { retrieveHelloWorldApi } from "../api/HelloWorldAPI";

export default function WelcomComponent(){
    const {username} = useParams()
    const [message, setMessage] = useState(null)
    function callHelloWorldRestAPI(){
        console.log('called')
        retrieveHelloWorldApi()
             .then((response) => successfulResponse(response))
             .catch((error) => errorResponse(error))
             .finally( ()=>console.log('cleanup'))
    }

    function successfulResponse(response){
        console.log(response)
        setMessage(response.data)
    }

    function errorResponse(error){
        console.log(error)
    }
    return (
        <>
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos - <Link href ="/todos">Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestAPI}> Call Hello World</button>
            </div>
            <div className="test-info">
             {message}
            </div>
        </>
    )
}