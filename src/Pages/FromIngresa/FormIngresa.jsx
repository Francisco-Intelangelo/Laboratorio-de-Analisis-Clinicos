import { AuthProvider } from '../../Context/AuthContext'
import { Ingresar } from '../../Components/Ingresar/Ingresar'
const FormIngresa = () => {
  return (
    <AuthProvider> 
        <Ingresar/>
    </AuthProvider> 
    
  )
}

export default FormIngresa