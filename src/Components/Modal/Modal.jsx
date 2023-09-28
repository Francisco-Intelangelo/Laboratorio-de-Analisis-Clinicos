import {useState} from 'react'
import styled from 'styled-components'
import VentanaModal from './VentanaModal';

const Modal = () => {
    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [estadoModal2, cambiarEstadoModal2] = useState(false);
    const [estadoModal3, cambiarEstadoModal3] = useState(false);
    const [estadoModal4, cambiarEstadoModal4] = useState(false);
    const [estadoModal5, cambiarEstadoModal5] = useState(false);
    const [estadoModal6, cambiarEstadoModal6] = useState(false);
    const [estadoModal7, cambiarEstadoModal7] = useState(false);
    const [estadoModal8, cambiarEstadoModal8] = useState(false);
    const [estadoModal9, cambiarEstadoModal9] = useState(false);
    const [estadoModal10, cambiarEstadoModal10] = useState(false);
    const [estadoModal11, cambiarEstadoModal11] = useState(false);
    const [estadoModal12, cambiarEstadoModal12] = useState(false);
    const [estadoModal13, cambiarEstadoModal13] = useState(false);
    const [estadoModal14, cambiarEstadoModal14] = useState(false);
    const [estadoModal15, cambiarEstadoModal15] = useState(false);
    const [estadoModal16, cambiarEstadoModal16] = useState(false);
    const [estadoModal17, cambiarEstadoModal17] = useState(false);

    return (
        <div>
            <ContenedorBotones>
                <Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Hemograma</Boton>
                <Boton onClick={() => cambiarEstadoModal2(!estadoModal2)}>LDL</Boton>
                <Boton onClick={() => cambiarEstadoModal3(!estadoModal3)}>HDL</Boton>
                <Boton onClick={() => cambiarEstadoModal4(!estadoModal4)}>TSH</Boton>
                <Boton onClick={() => cambiarEstadoModal5(!estadoModal5)}>Urocultivo</Boton>
                <Boton onClick={() => cambiarEstadoModal6(!estadoModal6)}>Glucosa</Boton>
                <Boton onClick={() => cambiarEstadoModal7(!estadoModal7)}>Voriconazol</Boton>
                <Boton onClick={() => cambiarEstadoModal8(!estadoModal8)}>Acetona</Boton>
                <Boton onClick={() => cambiarEstadoModal9(!estadoModal9)}>Acido Base</Boton>
                <Boton onClick={() => cambiarEstadoModal10(!estadoModal10)}>Ciclosporina</Boton>
                <Boton onClick={() => cambiarEstadoModal11(!estadoModal11)}>Elastasa</Boton>
                <Boton onClick={() => cambiarEstadoModal12(!estadoModal12)}>Factor II</Boton>
                <Boton onClick={() => cambiarEstadoModal13(!estadoModal13)}>Cortisol Vespertino</Boton>
                <Boton onClick={() => cambiarEstadoModal14(!estadoModal14)}>Inhibina B</Boton>
                <Boton onClick={() => cambiarEstadoModal15(!estadoModal15)}>Iodo - Orina</Boton>
                <Boton onClick={() => cambiarEstadoModal16(!estadoModal16)}>Microalbuminuria</Boton>
                <Boton onClick={() => cambiarEstadoModal17(!estadoModal17)}>Lipasa</Boton>
            </ContenedorBotones>

            {/*Hemograma*/}
            <VentanaModal 
                estado={estadoModal1}
                cambiarEstado={cambiarEstadoModal1}
                titulo="Hemograma"
            >
                <p>
                    <b>PRÁCTICA:</b> HEMOGRAMA CON PLAQUETAS<br/><b>PROCESO:</b> Lun - Mar - Mie - Jue - Vie<br/><b>FECHA DE PROMESA:</b> EN EL DÍA
                    <br/><b>METODOLOGÍA:</b> CONTADOR HEMATOLÓGICO
                    <br/><b>IND. ESPECIALES:</b> HEMOGRAMA SIN OBSERVACIÓN DE EXTENDIDO. SE INFORMAN ADEMÁS DE LOS RESULTADOS, EN EL CAMPO OBSERVACIONES LAS ALARMAS QUE DETALLE EL CONTADOR
                    <br/><b>TIPO MUESTRA:</b> SANGRE ENTERA CON EDTA<br/><b>VOLUMEN:</b> 1.00 ML
                </p>
            </VentanaModal>

            {/*LDL*/}
            <VentanaModal 
                estado={estadoModal2}
                cambiarEstado={cambiarEstadoModal2}
                titulo="LDL"
            >
                <p>
                    <b>PRÁCTICA:</b> LDL COLESTEROL<br/><b>PROCESO:</b> Lun - Mar - Mie - Jue - Vie<br/><b>FECHA DE PROMESA:</b> EN EL DÍA
                    <br/><b>METODOLOGÍA:</b> HOMOGÉNEO ENZIMÁTICO COLORIMÉTRICO<br/><b>TIPO MUESTRA:</b> SUERO / PLASMA CON HEPARINA
                    <br/><b>VOLUMEN:</b> 1 ML
                </p>
            </VentanaModal>

            {/*HDL*/}
            <VentanaModal 
                estado={estadoModal3}
                cambiarEstado={cambiarEstadoModal3}
                titulo="HDL"
            >
                <p>
                    <b>PRÁCTICA:</b> HDL COLESTEROL<br/>
                    <b>PROCESO:</b> Lun - Mar - Mie - Jue - Vie<br/>
                    <b>FECHA DE PROMESA:</b> EN EL DÍA<br/>
                    <b>METODOLOGÍA:</b> HOMOGÉNEO ENZIMÁTICO COLORIMÉTRICO<br/>
                    <b>TIPO MUESTRA:</b> SUERO / PLASMA CON HEPARINA<br/>
                    <b>VOLUMEN:</b> 1 ML
                </p>
            </VentanaModal>

            {/*TSH*/}
            <VentanaModal 
                estado={estadoModal4}
                cambiarEstado={cambiarEstadoModal4}
                titulo="TSH"
            >
                <p>
                    <b>PRÁCTICA:</b> TSH CANINA<br/>
                    <b>PROCESO:</b> Lun - Mar - Mie<br/>
                    <b>FECHA DE PROMESA:</b> 10 DÍAS HÁBILES<br/>
                    <b>METODOLOGÍA:</b> QLA<br/>
                    <b>TIPO MUESTRA:</b> SUERO CANINO<br/>
                    <b>VOLUMEN:</b> 1 ML
                </p>
            </VentanaModal>

            {/*Urocultivo*/}
            <VentanaModal 
                estado={estadoModal5}
                cambiarEstado={cambiarEstadoModal5}
                titulo="Urocultivo"
            >
                <p>
                    <b>PRÁCTICA:</b> UROCULTIVO<br/>
                    <b>PROCESO:</b> Lun - Mar - Mie - Jue - Vie<br/>
                    <b>FECHA DE PROMESA:</b> 4 DÍAS HÁBILES<br/>
                    <b>METODOLOGÍA:</b> CULTIVO<br/>
                    <b>IND. ESPECIALES:</b> 1º ORINA DE LA MAÑANA EN RECIPIENTE ESTERIL<br/>
                    PLACA CON DESARROLLO: 1 A 3 DÍAS HAB.<br/>
                    ORINA: 2 A 4 DÍAS HAB.<br/>
                    <b>TIPO MUESTRA:</b> VARIOS<br/>
                </p>
            </VentanaModal>

            {/*Glucosa*/}
            <VentanaModal 
                estado={estadoModal6}
                cambiarEstado={cambiarEstadoModal6}
                titulo="Glucosa"
            >
                <p>
                    <b>PRÁCTICA:</b> GLUCOSA<br/>
                    <b>PROCESO:</b> Lun - Mar - Mie - Jue - Vie - Sab<br/>
                    <b>FECHA DE PROMESA:</b> EN EL DÍA<br/>
                    <b>METODOLOGÍA:</b> ENZIMÁTICO UV HEXOQUINASA<br/>
                    <b>IND. ESPECIALES:</b> SUERO / PLASMA CON HEPARINA / LÍQUIDOS BIOLÓGICOS<br/>
                    <b>TIPO MUESTRA:</b> VARIOS<br/>
                    <b>VOLUMEN: 1</b> ML<br/>
                </p>
            </VentanaModal>

            {/*Voriconazol*/}
            <VentanaModal 
                estado={estadoModal7}
                cambiarEstado={cambiarEstadoModal7}
                titulo="Voriconazol"
            >
                <p>
                    <b>PRÁCTICA:</b> VORICONAZOL<br/>
                    <b>PROCESO:</b> Mie - Vie<br/>
                    <b>FECHA DE PROMESA:</b> 13 DÍAS HÁBILES<br/>
                    <b>METODOLOGÍA:</b> HPLC - UV<br/>
                    <b>IND. ESPECIALES:</b> REALIZAR LA TOMA DE MUESTRA ENTRE 15 Y 20 MINUTOS 
                        ANTES DE LA TOMA DE LA DOSIS (VALLE). REMITIR NOMBRE DEL MEDICAMENTO, DOSIS, 
                        HORA DE TOMA DE LA MEDICACIÓN Y HORARIO DE TOMA DE LA MUESTRA RESPECTO DE LA 
                        DOSIS. NOTA: SI EL PEDIDO MÉDICO SOLICITA LA TOMA DE MUESTRA EN OTRO MOMENTO,
                        INDICAR CONDICIONES: EJ: A LAS DOS HORAS DE LA TOMA DE LA MEDICACIÓN.<br/>
                    <b>TIPO MUESTRA:</b> SUERO<br/>
                    <b>VOLUMEN:</b> 2 ML<br/>
                </p>
            </VentanaModal>

            {/*Acetona*/}
            <VentanaModal 
                estado={estadoModal8}
                cambiarEstado={cambiarEstadoModal8}
                titulo="Acetona"
            >
                <p>
                    <b>PRÁCTICA:</b> ACETONA - ORINA<br/>
                    <b>PROCESO:</b> Mie - Vie<br/>
                    <b>FECHA DE PROMESA:</b> 17 DÍAS HÁBILES<br/>
                    <b>METODOLOGÍA:</b> CROMATOGRAFIA GASEOSA CON DETECTOR FID<br/>
                    <b>IND. ESPECIALES:</b> EN CASO DE SOLICITARSE COMO MARCADOR DE EXPOSICIÓN LABORAL, 
                        RECOLECTAR ORINA ESPONTÁNEA (3 HS. DE RETENCIÓN) EN RECIPIENTE ESTÉRIL AL FINALIZAR 
                        UNA JORNADA DE TRABAJO, LUEGO DE 3 DÍAS CONSECUTIVOS COMO MÍNIMO DE TRABAJO. TAPAR Y
                        SELLAR CON CINTA ADHESIVA, LOGRANDO HERMETICIDAD.<br/>
                    <b>TIPO MUESTRA:</b> ORINA ESPONTÁNEA<br/>
                    <b>VOLUMEN:</b> 30 ML<br/>
                </p>
            </VentanaModal>

            {/*Acido Base*/}
            <VentanaModal 
                estado={estadoModal9}
                cambiarEstado={cambiarEstadoModal9}
                titulo="Acido Base"
            >
                <p>
                    <b>PRÁCTICA:</b> ACIDO BASE<br/>
                    <b>PROCESO:</b> Lun - Mar - Mie - Jue - Vie<br/>
                    <b>FECHA DE PROMESA:</b> EN EL DÍA<br/>
                    <b>METODOLOGÍA:</b> GASÓMETRO<br/>
                    <b>IND. ESPECIALES:</b> LA MUESTRA DEBE PROCESARSE DENTRO DE LA HORA DE OBTENIDA.<br/>
                    <b>TIPO MUESTRA:</b> SANGRE ARTERIAL HEPARINIZADA<br/>
                    <b>VOLUMEN:</b> 2 ML<br/>
                </p>
            </VentanaModal>

            {/*Ciclosporina*/}
            <VentanaModal 
                estado={estadoModal10}
                cambiarEstado={cambiarEstadoModal10}
                titulo="Ciclosporina"
            >
                <p>
                    <b>PRÁCTICA:</b> CICLOSPORINA<br/>
                    <b>PROCESO:</b> Lun - Mar - Mie - Jue - Vie<br/>
                    <b>FECHA DE PROMESA:</b> 1 DÍA HÁBIL<br/>
                    <b>METODOLOGÍA:</b> ECLIA<br/>
                    <b>IND. ESPECIALES:</b> REALIZAR LA TOMA DE MUESTRA ENTRE 15 Y 20 MINUTOS ANTES DE LA TOMA 
                        DE LA DOSIS. REMITIR NOMBRE DEL MEDICAMENTO, DOSIS, HORA DE TOMA DE LA MEDICACIÓN Y
                        HORARIO DE TOMA DE LA MUESTRA RESPECTO DE LA DOSIS. NOTA: SI EL PEDIDO MÉDICO SOLICITA LA
                        TOMA DE MUESTRA EN OTRO MOMENTO, INDICAR CONDICIONES. EVITAR EL CONTACTO DIRECTO CON EL REFRIGERANTE.<br/>
                    <b>TIPO MUESTRA:</b> SANGRE ENTERA CON EDTA<br/>
                    <b>VOLUMEN:</b> 1 ML<br/>
                </p>
            </VentanaModal>

            {/*Elastasa*/}
            <VentanaModal 
                estado={estadoModal11}
                cambiarEstado={cambiarEstadoModal11}
                titulo="Elastasa"
            >
                <p>
                    <b>PRÁCTICA:</b> ELASTASA<br/>
                    <b>PROCESO:</b> Lun - Mar - Mie - Vie<br/>
                    <b>FECHA DE PROMESA:</b> 9 DÍAS HÁBILES<br/>
                    <b>METODOLOGÍA:</b> INMUNOTURBIDIMETRIA<br/>
                    <b>IND. ESPECIALES:</b> MATERIA FECAL ESPONTÁNEA EN RECIPIENTE ESTERIL. ENVIAR REFRIGERADO. 
                        SI ES UN BEBE, TAN PRONTO COMO DEFECA QUITAR EL PAÑAL Y CON UN BAJALENGUAS O CUCHARA RECOGER
                        MATERIA FECAL. COLOCAR LA MATERIA FECAL EN FRASCO ESTERIL. MANTENER EN HELADERA HASTA SU ENVÍO 
                        AL LABORATORIO. NO SE PUEDE RESOLVER SI LA MATEIA FECAL ES LÍQUIDA.<br/>
                    <b>TIPO MUESTRA:</b> MATERIA FECAL<br/>
                    <b>VOLUMEN:</b> -<br/>
                </p>
            </VentanaModal>

            {/*Factor II*/}
            <VentanaModal 
                estado={estadoModal12}
                cambiarEstado={cambiarEstadoModal12}
                titulo="Factor II"
            >
                <p>
                    <b>PRÁCTICA:</b> FACTOR II<br/>
                    <b>PROCESO:</b> Mar<br/>
                    <b>FECHA DE PROMESA:</b> 16 DÍAS HÁBILES<br/>
                    <b>METODOLOGÍA:</b> COAGULOMÉTRICO<br/>
                    <b>IND. ESPECIALES:</b> LA MUESTRA DEBE TOMARSE EN TUBO NUEVO EL DÍA DE PROCESAMIENTO INDICADO
                        Y ENVIARSE AL LABORATORIO ANTES DE LAS 14.00. REQUIERE AYUNO DE 4HS.<br/>
                    <b>TIPO MUESTRA:</b> PLASMA CON CITRATO<br/>
                    <b>VOLUMEN:</b> 2 ML 9:1 TUBO NUEVO<br/>
                </p>
            </VentanaModal>

            {/*Cortisol Vespertino*/}
            <VentanaModal 
                estado={estadoModal13}
                cambiarEstado={cambiarEstadoModal13}
                titulo="Cortisol Vespertino"
            >
                <p>
                    <b>PRÁCTICA:</b> CORTISOL VESPERTINO<br/>
                    <b>PROCESO:</b> Lun - Mar - Mie - Jue - Vie<br/>
                    <b>FECHA DE PROMESA:</b> 1 DÍA HÁBIL<br/>
                    <b>METODOLOGÍA:</b> ECLIA<br/>
                    <b>IND. ESPECIALES:</b> CONCURRIR AL LABORATORIO, EL MISMO DÍA QUE SE REALIZÓ EL CORTISOL BASAL, 
                        A LAS 17 HORAS O A LA HORA INDICADA POR EL MÉDICO. ALMORZAR NORMALMENTE PERO EVITAR MERENDAR 
                        ANTES DE LA SEGUNDA EXTRACCIÓN<br/>
                    <b>TIPO MUESTRA:</b> SUERO<br/>
                    <b>VOLUMEN:</b> 1 ML<br/>
                </p>
            </VentanaModal>

            {/*Inhibina B*/}
            <VentanaModal 
                estado={estadoModal14}
                cambiarEstado={cambiarEstadoModal14}
                titulo="Inhibina B"
            >
                <p>
                    <b>PRÁCTICA:</b> INHIBINA B<br/>
                    <b>PROCESO:</b> Mie - Vie<br/>
                    <b>FECHA DE PROMESA:</b> 15 DÍAS HÁBILES<br/>
                    <b>METODOLOGÍA:</b> ELISA<br/>
                    <b>IND. ESPECIALES:</b> CONCURRIR AL LABORATORIO ENTRE LAS 7 Y 8 DE LA MAÑANA, CON 8 HORAS DE AYUNO.
                        LA TOMA DE MUESTRA SE REALIZA ENTRE EL DIA 3 A 5 CICLO. SI LA PACIENTE ESTÁ TOMANDO ALGUNA MEDICACIÓN 
                        PARA LA FUNCIÓN HORMONAL, QUE LA TOME DESPUÉS DE LA EXTRACCIÓN. SUSPENDER ANTICONCEPTIVOS ORALES AL MENOS
                        DURANTE 1 MES (PREVIA CONSULTA CON EL MÉDICO).<br/>
                    <b>TIPO MUESTRA:</b> SUERO<br/>
                    <b>VOLUMEN:</b> 1 ML<br/>
                </p>
            </VentanaModal>

            {/*Iodo - Orina*/}
            <VentanaModal 
                estado={estadoModal15}
                cambiarEstado={cambiarEstadoModal15}
                titulo="Iodo - Orina"
            >
                <p>
                    <b>PRÁCTICA:</b> IODO - ORINA<br/>
                    <b>PROCESO:</b> Lun - Mar - Mie<br/>
                    <b>FECHA DE PROMESA:</b> 10 DÍAS HÁBILES<br/>
                    <b>METODOLOGÍA:</b> EFM<br/>
                    <b>TIPO MUESTRA:</b>ORINA DE 24 HS<br/>
                    <b>VOLUMEN:</b> 50 ML<br/>
                </p>
            </VentanaModal>

            {/*Microalbuminuria*/}
            <VentanaModal 
                estado={estadoModal16}
                cambiarEstado={cambiarEstadoModal16}
                titulo="Microalbuminuria"
            >
                <p>
                    <b>PRÁCTICA:</b> MICROALBUMINURIA<br/>
                    <b>PROCESO:</b> Lun - Mar - Mie - Jue - Vie<br/>
                    <b>FECHA DE PROMESA:</b> EN EL DÍA<br/>
                    <b>METODOLOGÍA:</b> INMUNOTURBIDIMETRIA<br/>
                    <b>IND. ESPECIALES:</b> OTRO TIPO DE MUESTRA ORINA DE 24 HS.
                        MUESTRA DE ELECCIÓN: ORINA ESPONTÁNEA<br/>
                    <b>TIPO MUESTRA:</b> ORINA ESPONTÁNEA<br/>
                    <b>VOLUMEN:</b> 5 ML<br/>
                </p>
            </VentanaModal>

            {/*Lipasa*/}
            <VentanaModal 
                estado={estadoModal17}
                cambiarEstado={cambiarEstadoModal17}
                titulo="Lipasa"
            >
                <p>
                    <b>PRÁCTICA:</b> LIPASA<br/>
                    <b>PROCESO:</b> Lun - Mar - Mie - Jue - Vie<br/>
                    <b>FECHA DE PROMESA:</b> 6 DÍAS HÁBILES<br/>
                    <b>METODOLOGÍA:</b> TURBIDIMÉTRICO<br/>
                    <b>TIPO MUESTRA:</b> SUERO<br/>
                    <b>VOLUMEN:</b> 1 ML<br/>
                </p>
            </VentanaModal>
        </div>
    )
}

export default Modal;

const ContenedorBotones = styled.div`
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;
const Boton = styled.button`
    display:block;
    padding: 10px 30px;
    border-radius: 100px;
    color: #fff;
    border: none;
    background: #0066ff;
    curson: pointer;
    transition: .3s ease all;

    &:hover{
        background:#4E87F7;
    }
`;