import { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from './Components/Navbar/Navbar'

import {Home} from './Pages/Home/Home'
import {Estudios} from './Pages/Estudios/Estudios'
import {Nosotros} from './Pages/Nosotros/Nosotros'
import { Contacto } from './Pages/Contacto/Contacto'
import FormRegistro from '../src/Pages/FormRegistro/FormRegistro'
import FormIngresa from './Pages/FromIngresa/FormIngresa'

import { Footer } from './Components/Footer/Footer.jsx'

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {

  return (
    <>
      <Navbar/>
        <Wrapper>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/estudios' element={<Estudios/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/registrarse' element={<FormRegistro/>}/>
            <Route path='/ingresar' element={<FormIngresa/>}/>
          </Routes>
        </Wrapper>
      <Footer/>
    </>
  )
}

export default App
