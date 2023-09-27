import "./Nosotros.css";
import silueta from "../../assets/AssetsNosotros/silueta.jpg"


export const Nosotros = () => {
    return (
        <div className="containerNosotros">
            <section className="containerHistoria">
                <h1 className="tituloQuienes">¿Quienes somos?</h1>
                <div className="historia">
                    <h2 className="tituloNosotros">HISTORIA</h2>
                </div>
                <div className="containerTextoHistoria">
                    <p className="textoHistoria">
                        En el año 1993, nació la idea de
                        establecer un laboratorio de análisis clínicos que pudiera
                        proporcionar servicios de alta calidad y confianza a la gente. 
                        Los fundadores de esta iniciativa
                        fueron el Dr. Ricardo González y la Dra. Ana Martínez, dos
                        profesionales experimentados en el campo de la medicina y la
                        biología. Ambos compartían una visión común de brindar servicios de
                        diagnóstico precisos y confiables a la comunidad, sabiendo que estos
                        desempeñaban un papel crucial en la atención médica y el bienestar
                        de las personas.<br/>
                        El Dr. González, con su especialización en
                        patología clínica y amplia experiencia en laboratorios de renombre,
                        aportaba el conocimiento técnico necesario para establecer un
                        laboratorio de vanguardia. La Dra. Martínez, por otro lado, aportaba
                        su experiencia como médica general y su profunda comprensión de las
                        necesidades de los pacientes y los médicos tratantes. Ambos
                        fundadores compartían la filosofía de que la calidad y la precisión
                        eran aspectos inquebrantables en la atención médica, y estaban
                        comprometidos a garantizar que cada análisis clínico realizado en su
                        laboratorio cumpliera con los más altos estándares de excelencia.<br/>
                        Con esta visión en mente y el apoyo de inversores, fundaron el
                        Laboratorio Clínico. Con el objetivo claro de: proporcionar un lugar 
                        donde los pacientes y los profesionales
                        de la salud pudieran confiar plenamente en la precisión de los
                        análisis y en la profesionalidad con la que se
                        llevaban a cabo. Inversiones en tecnología de punta, formación
                        continua del personal, colaboraciones con expertos médicos locales y
                        un enfoque centrado en el paciente fueron los pilares sobre los que
                        se edificó este laboratorio.<br/>
                        Con el tiempo, el laboratorio se consolidó como una institución 
                        respetada en la comunidad, reconocida por su integridad, 
                        precisión y compromiso con el bienestar de las personas.
                    </p>
                </div>
            </section>
            <section className="containerProfesionales">
                    <h3 className="tituloNosotros">PROFESIONALES</h3>
                    <div className="containerNombres">
                        <p className="textoNombres">Algunos de los Profesionales que nos acompañan.</p>
                        <ul className="listaNombres">
                            <li className="li"><img src={silueta} className="silueta" alt="foto doctor"/>Téc. Rodrigo García</li>
                            <li className="li"><img src={silueta} className="silueta" alt="foto doctor"/>Dr. Alejandro Gómez</li>
                            <li className="li"><img src={silueta} className="silueta" alt="foto doctor"/>Bioq. Daniel Sánchez</li>
                            <li className="li"><img src={silueta} className="silueta" alt="foto doctor"/>Vet. Pablo Molteni</li>
                            <li className="li"><img src={silueta} className="silueta" alt="foto doctor"/>Dra. Laura Martinez</li>
                            <li className="li"><img src={silueta} className="silueta" alt="foto doctor"/>Bioq. Sofía Rodríguez</li>
                            <li className="li"><img src={silueta} className="silueta" alt="foto doctor"/>Vet. Estefanía Rosillo</li>
                        </ul>
                    </div>
            </section>
            <section className="containerPolitica">
                <h4 className="tituloNosotros">POLíTICAS DE CALIDAD</h4>
                <p className="textoPolitica">
                    En el Laboratorio de Análisis Clínicos todos los integrantes asumimos
                    el compromiso y la responsabilidad por:
                </p>
                <div className="containerPuntos">
                    <p className="punto">
                        01.
                        <br />
                        Brindar cordialidad y eficacia en la atención personalizada.
                    </p>
                    <p className="punto">
                        02.
                        <br />
                        Garantizar la realización de los análisis clínicos solicitados.
                    </p>
                    <p className="punto">
                        03.
                        <br />
                        Entregar resultados confiables en el tiempo y la forma acordada.
                    </p>
                    <p className="punto">
                        04.
                        <br />
                        Asegurar el liderazgo profesional.
                    </p>
                    <p className="punto">
                        05.
                        <br />
                        Lograr la satisfacción de nuestros pacientes y de las Instituciones
                        que remiten muestras a nuestro laboratorio.
                    </p>
                </div>
                <div className="normaPolitica">
                    <p className="textoNorma">
                        En cumplimiento de lo exigido por la Norma ISO 9001:2008 en el LAC
                        nos comprometemos a la mejora continua de nuestros procesos.
                    </p>
                </div>
            </section>
        </div>
    );
};
