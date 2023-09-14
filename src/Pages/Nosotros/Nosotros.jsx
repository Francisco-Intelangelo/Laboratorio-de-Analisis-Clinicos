import './Nosotros.css';

export const Nosotros = () => {

    return (
    <div className = "containerNosotros">
            <section className = "containerHistoria">
                <h2 className='tituloQuienes'>¿Quienes somos?</h2>
                <div className = "historia">
                    <h3 className = "tituloHistoria">HISTORIA</h3>
                </div>
                <div className = "textoHistoria">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident,
                </div>
            </section>
            <section className = "containerPolitica">
                <h3 className='tituloPolitica'>POLíTICA DE CALIDAD</h3>
                <p className='textoPolitica'>
                    En el Laboratorio de Análisis Clínicos  todos los integrantes asumimos el compromiso y la responsabilidad por:
                </p>
                <div className = "containerPuntos">
                    <p className = "punto">
                        01.<br/>Brindar cordialidad y eficacia en la atención personalizada.
                    </p>    
                    <p className = "punto">
                        02.<br/>Garantizar la realización de los análisis clínicos solicitados.
                    </p>
                    <p className = "punto">
                        03.<br/>Entregar resultados confiables en el tiempo y la forma acordada.
                    </p>
                    <p className = "punto">
                        04.<br/>Asegurar el liderazgo profesional.
                    </p>
                    <p className = "punto">
                        05.<br/>Lograr la satisfacción de nuestros pacientes y de las Instituciones que remiten muestras a nuestro laboratorio.
                    </p>
                </div>           
                <div className = "normaPolitica">
                    <p className='textoNorma'>
                        En cumplimiento de lo exigido por la Norma ISO 9001:2008 en el LAC nos comprometemos a la mejora continua de nuestros procesos.
                    </p>
                </div>
            </section>
        </div>
    )
}
