import "./Estudios.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faHouse,
  faTeletype,
} from "@fortawesome/free-solid-svg-icons";

export const Estudios = () => {
  return (
    <>
      <main>
        <h1 className="estudios_title">¿Que estudios realizamos?</h1>
        <div className="estudios_container">
          <div className="estudio_card">
            <p>Hemograma</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className="estudio_card">
            <p>LDL</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className="estudio_card">
            <p>HDL</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className="estudio_card">
            <p>TSH</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className="estudio_card">
            <p>Urocultivo</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className="estudio_card">
            <p>Glucosa</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className="estudio_card">
            <p>Voriconazol</p>
            <FontAwesomeIcon icon={faCaretDown} />
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
                <p>Atención telefónica</p>
                <p>Lunes a viernes</p>
                <p>08:00 - 16:00</p>
              </div>
              <div className="estudios_solicitaTurno_white_cont">
                <FontAwesomeIcon icon={faHouse} style={{ fontSize: "100px" }} />
                <p>Atención en sede <br/>José Baigorrí 623</p>
                <p>Lunes a viernes</p>
                <p>08:00 - 16:00</p>
              </div>
              <div className="estudios_solicitaTurno_white_cont">
                <FontAwesomeIcon icon={faHouse} style={{ fontSize: "100px" }} />
                <p>Atención en sede <br/>Av. General Paz 272</p>
                <p>Lunes y Miercoles</p>
                <p>08:00 - 17:00</p>
              </div>
              <div className="estudios_solicitaTurno_white_cont">
                <FontAwesomeIcon icon={faHouse} style={{ fontSize: "100px" }} />
                <p>Atención en sede <br/>Viamonte 581</p>
                <p>Lunes a viernes</p>
                <p>08:00 - 16:00</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};