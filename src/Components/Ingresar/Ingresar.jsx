import { useState } from 'react';
import '../../Pages/FormRegistro/FormRegistro';
import { NavLink } from 'react-router-dom';
import { UseAuth } from "../../Context/AuthContext"
import "./Ingresar.css"


export const Ingresar = () => {
    const auth = UseAuth()


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        auth.login(email, password);
    };

    return (
        <div className= "sign_in">
            <form className= "form_login">
                <h1 className= "title_login">Tu cuenta</h1>
                <div className= "login">
                    <div>
                        <label className='label'>E-mail:</label>
                    </div>
                        <div>
                            <input onChange={(e)=> setEmail(e.target.value)} type="email" className="in"/>
                        </div>
                    <div>
                        <label>Contraseña:</label>
                    </div>
                    <div>
                        <input onChange={(e)=> setPassword(e.target.value)} type="password" className= "in"/>
                    </div>  
                </div>
                <div className='container_button'>
                    <button onClick={(e)=> handleLogin(e)} className= "button_iniciar_sesion" type='submit'>Iniciar sesión</button>
                </div>
                <div>
                    <p className='text_registro'>¿No estás registrado? <NavLink to='/registrarse' className="button_registro">Regístrate</NavLink></p>
                </div>
            </form>
        </div>
    )
}
