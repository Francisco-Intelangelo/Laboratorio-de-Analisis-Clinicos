import {Registrarse} from '../../Components/Registrarse/Registrarse.jsx'
import { AuthProvider } from '../../Context/AuthContext'

const FormRegistro = () => {
    return (
        <AuthProvider> 
            <Registrarse/>
        </AuthProvider> 
    
    )
}

export default FormRegistro;