import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
const VentanaModal = ({children , estado, cambiarEstado, titulo}) => {
    return (
        <>  
            {estado && 
                <Overlay>
                    <ContenedorModal>
                        <EncabezadoModal>
                            <h3>{titulo}</h3>
                        </EncabezadoModal>

                        <BotonCerrar onClick={()=>cambiarEstado(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </BotonCerrar>
                        {children}
                    </ContenedorModal>
                </Overlay>
            }
        </>
    )
}

export default VentanaModal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ContenedorModal = styled.div`
    width: 500px;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,.2) 0px 7px 29px 0px;
    padding: 20px;
`;
const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #4E87F7;

    h3{
        font-family: 'Raleway';
        font-weight: 600;
        font-size: 16px;
        color: #4E87F7;
    }
`;
const BotonCerrar = styled.button`
    position: absolute;
    top: 15px;
    right: 20px;
    width: 1.5em;
    height: 1.5em;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #4E87F7;
    
    svg{
        width: 100%;
        height: 100%;
    }

`;