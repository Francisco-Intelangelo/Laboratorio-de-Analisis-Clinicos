import {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import  Logo  from "../../assets/Logo.png"
import "./Navbar.css"

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className='navbar'>
            <Link to="/" className='title'><img src={Logo} className='logo_nav' alt='Logo'/></Link>
            <div className='menu' onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/estudios">Estudios</NavLink>
                </li>
                <li>
                    <NavLink to="/nosotros">Nosotros</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto">Contacto/Horarios</NavLink>
                </li>
                {/* <li>
                    <NavLink to="/registrarse" className='button'>Registrarse</NavLink>
                </li>
                <li>
                    <NavLink to="/ingresar" className='button'>Ingresar</NavLink>
                </li> */}
            </ul>
        </nav>
    )
}
