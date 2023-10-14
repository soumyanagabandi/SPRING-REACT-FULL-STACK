import {useState} from 'react';
export default function LoginComponent(){
    const [username, setUsername] = useState('soumya')
    const [password, setPassword] = useState('')
    const [successMessage, showSuccessMessage] = useState(false)
    const [errorMessage, showErrorMessage] = useState(false)
    function handleUsername(event){
        setUsername(event.target.value)
    }
    function handlePassword(event){
        setPassword(event.target.value)
    }
    function handleLogin(){
        if(username==="soumya"  && password == "soumya"){
            showErrorMessage(false)
            showSuccessMessage(true)
        }else{
            showErrorMessage(true)
            showSuccessMessage(false)
        }
    }
    return (
        <div className="Login">
        <div className="LoginForm">
        {successMessage && <div className='successMessage'>Login Successfull</div>}
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