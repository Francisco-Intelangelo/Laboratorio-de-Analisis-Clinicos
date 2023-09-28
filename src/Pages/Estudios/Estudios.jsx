import "./Estudios.css";
import Modal from "../../Components/Modal/Modal"

export const Estudios = () => {
  return (
    <>
      <main className="main">
        <h1 className="estudios_title">¿Que estudios realizamos?</h1>
        <p>Presione los botones para mas informacion</p>
        <div className="containerModal">
            <Modal/>
        </div>
      </main>
    </>
  );
};