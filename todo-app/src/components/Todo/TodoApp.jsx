import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import ErrorComponent from './ErrorComponent';
import ListTodoComponent from './ListTodoComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import WelcomComponent from "./WelcomeComponent";
import LogoutComponent from './LogoutComponent';
import TodoComponent from "./TodoComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";
export default function TodoApp(){
  function AuthenticateRoute({children}){
    const authContext = useAuth()
    if(authContext.isAuthenticated){
      return children
    }
    return <Navigate to = '/'/>
  }
    return(
        <div className="TodoApp">
           <AuthProvider>
              <BrowserRouter>
                  <HeaderComponent/>
                    <Routes>
        <Route path ="/" element = {<LoginComponent/>}></Route>
        <Route path ="/login" element = {<LoginComponent/>}></Route>
        <Route path ='/welcome/:username' element = {<AuthenticateRoute><WelcomComponent/></AuthenticateRoute>}></Route>
        <Route path='/todos' element={<AuthenticateRoute><ListTodoComponent/></AuthenticateRoute>}></Route>
        <Route path='/todo/:id' element={<AuthenticateRoute><TodoComponent/></AuthenticateRoute>}></Route>
        <Route path='/logout' element={<AuthenticateRoute><LogoutComponent/></AuthenticateRoute>}></Route>
        <Route path = '*' element = {<ErrorComponent/>}> </Route>
      </Routes>
      <FooterComponent/>
     </BrowserRouter>
     </AuthProvider>
        </div>
    )
}