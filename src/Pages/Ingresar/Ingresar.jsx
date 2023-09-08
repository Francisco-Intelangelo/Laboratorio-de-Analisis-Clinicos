import { useState } from 'react';
import "./Ingresar.css"
import '../Registrarse/Registrarse';
import { NavLink } from 'react-router-dom';


export const Ingresar = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    /**
        * The handleSubmit function prevents the default form submission behavior.
    */
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className= "sign_in">
            <form className= "form_login" onSubmit={handleSubmit}>
                <h1 className= "title_login">Tu cuenta</h1>
                <div className= "login">
                    <div>
                        <label>Usuario:</label>
                    </div>
                        <input type="text" value={user} className= "in" onChange={(e) => setUser(e.target.value)}/>
                    <div>
                    </div>
                    <div>
                        <label>Contraseña:</label>
                    </div>
                    <div>
                        <input type="password" className= "in" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>  
                </div>
                <div className='container_button'>
                    <button className= "button_iniciar_sesion" type='submit'>Iniciar sesión</button>
                </div>
                <div>
                    <p className='text_registro'>¿No estás registrado? <NavLink to='/registrarse' className="button_registro">Regístrate</NavLink></p>
                </div>
            </form>
        </div>
    )
}
