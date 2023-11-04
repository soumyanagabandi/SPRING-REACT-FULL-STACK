import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';
export default function LoginComponent(){
    const [username, setUsername] = useState('soumya')
    const [password, setPassword] = useState('')
    const [errorMessage, showErrorMessage] = useState(false)
    const navigate = useNavigate();
    const authContext = useAuth();
    function handleUsername(event){
        setUsername(event.target.value)
    }
    function handlePassword(event){
        setPassword(event.target.value)
    }
    function handleLogin(){
        if(authContext.login(username,password)){
            navigate(`/welcome/${username}`)
        }else{
            showErrorMessage(true)
        }
    }
    return (
        <div className="Login">
        <div className="LoginForm">
        {errorMessage && <div className='errorMessage'>Please enter valid credentials</div>}
        <div>
            <label>Username:</label>
            <input type="text" name ="username" value ={username} onChange={handleUsername} />
        </div>
         <div>
            <label>Password:</label>
            <input type="password" name="password" value = {password} onChange={handlePassword}/>
         </div>
         <button className="Login" onClick={handleLogin}>Login</button>
        </div>
        </div>
    )
}