import { useParams } from "react-router-dom";
import LoginComponent from "./LoginComponent";

export default function WelcomComponent(){
    const {username} = useParams()
    return (
        <>
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos - <a href ="/todos">Go here</a>
            </div>
        </>
    )
}