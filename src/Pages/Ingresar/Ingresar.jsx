import "./Ingresar.css"
import { useRef } from 'react';
import {useForm} from 'react-hook-form';
import '../Registrarse/Registrarse';
import { NavLink } from 'react-router-dom';

const  errorStyle = {
    color: 'red',
};

export const Ingresar = () => {
    /* The code is using the `useForm` hook from the `react-hook-form` library to handle form validation
    and submission in a React component. */
    const {register, formState: {errors}, handleSubmit , watch, reset} = useForm({
        defaultValues: {
            user:'',
            password:'',
        }
    });

    /* The code is creating a reference to the password input field using the `useRef` hook. The
    `password` variable is initialized with a value of `null`. Then, the `current` property of the
    `password` reference is set to the value of the watched "password" field using the `watch`
    function from the `react-hook-form` library. This allows the code to access the current value of
    the password field and compare it with the confirm password field to validate if they match. */
    const password = useRef(null);
    password.current = watch("password", "");

    /* The `const onSubmit` variable is a function that is called when the form is submitted. It uses the
    `handleSubmit` function from the `react-hook-form` library to handle form submission. */
    const onSubmit = handleSubmit((data) =>{
        console.log(data);
        reset(); 
    });
    return (
        <div className= "sign_in">
            <form className= "form_login" onSubmit={onSubmit}>
                <h1 className= "title_login">Tu cuenta</h1>
                <div className= "login">
                    <div>
                        <label>Usuario:</label>
                    </div>
                        <input type="text" className= "in" name="user" {...register('user' , {
                            required: true, 
                            minLength: 4 
                        })}/>
                        {errors.user?.type === "required" && <p style={errorStyle}>Nombre de usuario requerido</p>}
                        {errors.user?.type === "minLength" && (<p style={errorStyle}>Nombre debe ser mayor a 3 caracteres</p>)}
                    <div>
                    </div>
                    <div>
                        <label>Contraseña:</label>
                    </div>
                    <div>
                        <input type="password" className= "in" name='password' {...register('password', {
                            required: {
                                value: true,
                            },
                            minLength: {
                                value: 8,
                                message: "Contraseña debe ser mayor a 8 caracteres",
                            }, 
                        })}/>
                        {errors.password && <p style={errorStyle}>{errors.password.message}</p>}
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
