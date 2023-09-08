import  Logo  from "../../assets/Logo.png"
import "./Footer.css"

export const Footer = () => {
    return (
        <div className="footer_container">
            <div className="container_img">
                <img src={Logo} className="img_footer" alt='Logo'/>
            </div>
            <div className="footer">
                <div className="sede">
                    <p className="subtitulo">SEDES</p>
                    <p className="text">José Baigorrí 623 <br/> Av. General Paz 272 <br/>Viamonte 581</p>
                </div>
                <div className="contacto">
                    <p className="subtitulo">CONTACTO</p>
                    <p className="text">0810 222 2563 (5223) <br/>info@laboratotioanalisisclinicos.com</p>
                </div>
                <div className="horario">
                    <p className="subtitulo">HORARIO</p>
                    <p className="text">Lunes a viernes de 8.00 hs a 16.00 hs.</p>
                </div>
            </div>
        </div>
    )
}