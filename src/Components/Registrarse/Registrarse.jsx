import { useState } from 'react';
import './Registrarse.css';
import { UseAuth } from "../../Context/AuthContext";
import { NavLink } from 'react-router-dom';

export const Registrarse = () => {
    const auth = UseAuth()

    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");

    const handleRegister = ()=> {
        auth.register(emailRegister, passwordRegister);
    };

    return (
        <div className="container_formRegister">
            <div className='register'>
                <form className='form_register'>
                    <h1 className="titleRegister">Registro</h1>
                    <div className='sd'>
                        <div className='form_div'>
                            <div className='containerBlock'>
                                <div>
                                    <label className='label'>Nombre:</label>
                                </div>
                                <div>
                                    <input type="text" className="input" name="name"/>
                                </div>
                                <div>
                                    <label className='label'>Apellido:</label>
                                </div>
                                <div>
                                    <input type="text" className="input" name="lastName"/>
                                </div>
                                <div>
                                    <label className='label'>E-mail:</label>
                                </div>
                                <div>
                                    <input onChange={(e)=> setEmailRegister(e.target.value)} type="email" className="input" name="email"/>
                                </div>
                                <div>
                                    <label className='label'>DNI:</label>   
                                </div>
                                <div>
                                    <input type="text" className="input" name="dni"/>
                                </div>
                            </div>
                            <div className='containerBlock'>
                                <div>
                                    <label className='label'>Teléfono:</label>
                                </div>
                                <div>
                                    <input type="tel" className="input" name="phone"/>
                                </div>
                                <div>
                                    <label className='label'>Usuario:</label>
                                </div>
                                <div>
                                    <input type="text" className="input_data" name="user"/>
                                </div>
                                <div>
                                    <label className='label' id='contraseña'>Contraseña:</label>
                                </div>
                                <div>
                                    <input onChange={(e)=> setPasswordRegister(e.target.value)} type="password" className="input_data" name="password"/>
                                </div>
                                <div className='form_div_div'>
                                    <div className='pass'>
                                        <label className='label' id='confirmarContraseña'>Confirmar contraseña:</label>  
                                    </div>
                                    <div>
                                        <input type="password" className="input_data" name="confPassword"/>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container_button'>
                        <NavLink to="/ingresar" onClick={()=> handleRegister()}  type="submit" className='send'>Registrarse</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
};
