import { createContext, useState, useContext} from "react";

// 1: Create a Context
export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

//2: Share the created context with other components.

export default function AuthProvider({children}){

    //3:Put some state in the context
    function login (username, password){
        if( username === 'soumya' && password === 'soumya'){
            setAuthentication(true)
            return true
        }else {
            return false
        }
    }

    function logout(){
        setAuthentication(false)
    }
    const [isAuthenticated, setAuthentication] = useState(false)
    return (
        <AuthContext.Provider value = {{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}