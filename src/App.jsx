import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'

import {Home} from './Pages/Home/Home'
import {Estudios} from './Pages/Estudios/Estudios'
import {Nosotros} from './Pages/Nosotros/Nosotros'
import FormRegistro from '../src/Pages/FormRegistro/FormRegistro'
import FormIngresa from './Pages/FromIngresa/FormIngresa'

import { Footer } from './Components/Footer/Footer.jsx'


function App() {

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/estudios' element={<Estudios/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/registrarse' element={<FormRegistro/>}/>
          <Route path='/ingresar' element={<FormIngresa/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
