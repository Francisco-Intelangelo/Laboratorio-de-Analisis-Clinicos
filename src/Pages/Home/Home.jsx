import { NavLink } from 'react-router-dom';
import { Slider } from '../../Components/Slider/Slider';
import uno from "../../assets/AssetsHome/Services/uno.png"
import dos from "../../assets/AssetsHome/Services/dos.png"
import tres from "../../assets/AssetsHome/Services/tres.png"
import "./Home.css"
import Accordion from '../../Components/Accordion/Accordion';

const accordionData = [
    {
        title: "¿Aceptan mi seguro médico para cubrir los costos de los análisis?",
        content: `Sí, en el Laboratorio Clínico de Confianza aceptamos la mayoría de 
        los seguros médicos para cubrir los costos de los análisis. Le recomendamos 
        que nos proporcione los detalles de su seguro cuando programe su cita, y nuestro 
        personal le ayudará a verificar la cobertura específica de su plan.`,
    },
    {
        title: "¿Cuánto tiempo suelen esperar los pacientes para ser atendidos?",
        content: `En el Laboratorio Clínico de Confianza, nos esforzamos por mantener 
        los tiempos de espera al mínimo. Por lo general, nuestros pacientes son atendidos 
        en un plazo de 15 a 30 minutos desde su llegada al laboratorio. Sin embargo, en 
        ciertos momentos del día o debido a circunstancias inesperadas, puede haber variaciones
        en los tiempos de espera. Apreciamos su paciencia y estamos comprometidos a brindarle 
        un servicio eficiente y de calidad.`,
    },
    {
        title: "¿Qué debo hacer para prepararme adecuadamente para un análisis?",
        content: <p><b>Siga instrucciones:</b> Siga las instrucciones que le proporcionamos para cada análisis.
        <br/>
        <b>Posible ayuno:</b> Si es necesario, ayune según las indicaciones antes del análisis.
        <br/>
        <b>Tome medicamentos:</b> Tome sus medicamentos según lo habitual, a menos que se le indique lo contrario.
        <br/>        
        <b>Comodidad:</b> Vístase con ropa cómoda y de fácil acceso.
        <br/>
        Si tiene dudas, pregunte al programar su cita o en su visita. Estamos aquí para ayudar.</p>
    },
];

export const Home = () => {
    return (
        <div>
            <div className="containerHome">
            <h1 className='titleHome'>Bienvenido</h1>
                <section className="banner">
                    <Slider/>
                    <div className="buttons">
                        <li className="sacar-turno">
                            <NavLink to="/estudios">SACAR TURNO</NavLink>
                        </li>
                        <li className="ver-resultados">
                            <NavLink to="/ingresar">VER RESULTADOS</NavLink>
                        </li>
                    </div>
                </section>
                <section className="servicios">
                    <div className="opciones">
                        <img className="img_banner" src={uno} alt='foto'/>
                        <img className="img_banner" src={dos} alt='foto'/>
                        <img className="img_banner" src={tres} alt='foto'/>
                    </div>
                </section>
                <section className="preguntas">
                    <h3 className='title_accordion'>Preguntas Frecuentes</h3>
                    <Accordion sections = {accordionData} className="accordion"/>
                </section>
            </div>
        </div>
    )
}
