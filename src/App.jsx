import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'

import {Home} from './Pages/Home/Home'
import {Estudios} from './Pages/Estudios/Estudios'
import {Nosotros} from './Pages/Nosotros/Nosotros'
import {Registrarse} from './Pages/Registrarse/Registrarse'
import {Ingresar} from './Pages/Ingresar/Ingresar'
import {Preguntas} from './Pages/Preguntas/Preguntas'

import { Footer } from './Components/Footer/Footer.jsx'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/estudios' element={<Estudios/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/registrarse' element={<Registrarse/>}/>
        <Route path='/ingresar' element={<Ingresar/>}/>
        <Route path='/preguntas' element={<Preguntas/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
