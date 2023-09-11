import { NavLink } from 'react-router-dom';
import { Slider } from '../../Components/Slider/Slider';
import uno from "../../assets/AssetsHome/Services/uno.png"
import dos from "../../assets/AssetsHome/Services/dos.png"
import tres from "../../assets/AssetsHome/Services/tres.png"
import "./Home.css"
import Accordion from '../../Components/Accordion/Accordion';

const accordionData = [
    {
        title: "Pregunta 1",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                In iste quibusdam rem quidem veniam explicabo, quia ratione hic 
                officia, inventore magnam autem ipsam perferendis, saepe quaerat 
                quod voluptates? Quas, eaque.`,
    },
    {
        title: "Pregunta 2",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                In iste quibusdam rem quidem veniam explicabo, quia ratione hic 
                officia, inventore magnam autem ipsam perferendis, saepe quaerat 
                quod voluptates? Quas, eaque.`,
    },
    {
        title: "Pregunta 3",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                In iste quibusdam rem quidem veniam explicabo, quia ratione hic 
                officia, inventore magnam autem ipsam perferendis, saepe quaerat 
                quod voluptates? Quas, eaque.`,
    },
];

export const Home = () => {
    return (
        <div>
            <div className="containerHome">
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
                    <Accordion sections = {accordionData} />
                </section>
            </div>
        </div>
    )
}
