import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faTeletype,
    } from "@fortawesome/free-solid-svg-icons";
import "./Contacto.css"

export const Contacto = () => {
    return (
        <div className="estudios_solicitaTurno">
            <section className="containerContacto">
                <h1 className="tituloContacto">Contacto</h1>
                <form className="form">
                    
                </form>
            </section>
            <section className="estudios_solicitaTurno_white">
                <h2 className="tituloHorarios">Horario de atención</h2>
                <div className="estudios_solicitaTurno_white_div">
                    <div className="estudios_solicitaTurno_white_cont">
                        <FontAwesomeIcon
                            icon={faTeletype}
                            style={{ fontSize: "100px" }}
                        />
                        <p className="text_horarios">Atención telefónica<br/>0810 222 2563 (5223)<br/>Lunes a viernes<br/>08:00 - 16:00</p>
                    </div>
                    <div className="estudios_solicitaTurno_white_cont">
                        <FontAwesomeIcon icon={faHouse} style={{ fontSize: "100px" }} />
                        <p className="text_horarios">Atención en sede <br/>José Baigorrí 623<br/>Lunes a viernes<br/>08:00 - 16:00</p>
                    </div>
                    <div className="estudios_solicitaTurno_white_cont">
                        <FontAwesomeIcon icon={faHouse} style={{ fontSize: "100px" }} />
                        <p className="text_horarios">Atención en sede <br/>Av. General Paz 272<br/>Lunes y Miercoles<br/>09:00 - 17:00</p>
                    </div>
                    <div className="estudios_solicitaTurno_white_cont">
                        <FontAwesomeIcon icon={faHouse} style={{ fontSize: "100px" }} />
                        <p className="text_horarios">Atención en sede <br/>Viamonte 581<br/>Lunes a viernes<br/>08:00 - 16:00</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
