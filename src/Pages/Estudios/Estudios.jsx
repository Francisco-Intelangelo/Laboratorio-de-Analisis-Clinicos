import "./Estudios.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTeletype,
} from "@fortawesome/free-solid-svg-icons";

export const Estudios = () => {
  return (
    <>
      <main className="main">
        <h1 className="estudios_title">¿Que estudios realizamos?</h1>
        <div className="estudios_container">
          <div className="estudio_card">
            <p className="text_card">Hemograma</p>
          </div>
          <div className="estudio_card">
            <p className="text_card">LDL</p>
          </div>
          <div className="estudio_card">
            <p className="text_card">HDL</p>
          </div>
          <div className="estudio_card">
            <p className="text_card">TSH</p>
          </div>
          <div className="estudio_card">
            <p className="text_card">Urocultivo</p>
          </div>
          <div className="estudio_card">
            <p className="text_card">Glucosa</p>
          </div>
          <div className="estudio_card">
            <p className="text_card">Voriconazol</p>
          </div>
          <div className="estudio_card">
            <p className="text_card">Acetona</p>
          </div>
          <div className="estudio_card">
            <p className="text_card">Acido Base</p>
          </div>
          <div className="estudio_card">
            <p className="text_card">Ciclosporina</p>
          </div>
          <div className="estudio_card">
            <p className="text_card">Elastasa</p>
          </div>
          <div className="estudio_card">
            <p className="text_card">Factor II</p>
          </div>
          <div className="estudio_card">
            <p className="text_card">Cortisol Vespertino</p>
          </div>
          <div className="estudio_card">
            <p className="text_card">Inhibina B</p>
          </div>
          <div className="estudio_card">
            <p className="text_card">Iodo - Orina</p>
          </div>
          <div className="estudio_card">
            <p className="text_card">Microalbuminuria</p>
          </div>
          <div className="estudio_card">
            <p className="text_card">Lipasa</p>
          </div>
        </div>
        <div className="estudios_solicitaTurno">
          <div className="estudios_solicitaTurno_white">
            <div className="estudios_solicitaTurno_white_cont_title">
              HORARIOS DE ATENCION
            </div>
            <div className="estudios_solicitaTurno_white_div">
              <div className="estudios_solicitaTurno_white_cont">
                <FontAwesomeIcon
                  icon={faTeletype}
                  style={{ fontSize: "100px" }}
                />
                <p className="text_horarios">Atención telefónica<br/>Lunes a viernes<br/>08:00 - 16:00</p>
              </div>
              <div className="estudios_solicitaTurno_white_cont">
                <FontAwesomeIcon icon={faHouse} style={{ fontSize: "100px" }} />
                <p className="text_horarios">Atención en sede <br/>José Baigorrí 623<br/>Lunes a viernes<br/>08:00 - 16:00</p>
              </div>
              <div className="estudios_solicitaTurno_white_cont">
                <FontAwesomeIcon icon={faHouse} style={{ fontSize: "100px" }} />
                <p className="text_horarios">Atención en sede <br/>Av. General Paz 272<br/>Lunes y Miercoles<br/>08:00 - 17:00</p>
              </div>
              <div className="estudios_solicitaTurno_white_cont">
                <FontAwesomeIcon icon={faHouse} style={{ fontSize: "100px" }} />
                <p className="text_horarios">Atención en sede <br/>Viamonte 581<br/>Lunes a viernes<br/>08:00 - 16:00</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};