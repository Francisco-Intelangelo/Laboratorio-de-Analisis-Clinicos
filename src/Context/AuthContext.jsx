import { auth } from "../firebase/firebase.config";
import { createContext, useContext } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

export const UseAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        console.log("error");
    }
    return context; 
}

// eslint-disable-next-line react/prop-types
export function AuthProvider({children}) {
    const register = async (name, lasName, email, dni, password) =>{
        const response = await registerData( name, lasName, email, dni, password);
        console.log(response);
    };
    const login = async (user, password) => {
        const response = await signInWithEmailAndPassword(auth, user, password);
        console.log(response);
    };
    const logout = async () => {
        const response = await signOut(auth);
        console.log(response)
    }
    
    return(
        <AuthContext.Provider 
            value={{
                register,
                login,
                logout,
            }}>
            {children}
        </AuthContext.Provider>
    )
}