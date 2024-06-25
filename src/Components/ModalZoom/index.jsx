import styled from "styled-components";
import Imagen from "../Galeria/Imagen/Index";
import BotonIcono from "../BotonIcono/BotonIcono";


const OverLay = styled.div`
background-color: rgba(0,0,0,.7);
position:fixed;
top:0;
left:0;
right:0;
bottom:0;`

const DialogEstilizado = styled.dialog`
position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }

`

const ModalZoom = ({foto, alCerrar,alternarFavoritos}) => {
  return (
    <>
      {foto && <>
      <OverLay/>
      <DialogEstilizado open={!!foto} onClose={alCerrar}>
        <Imagen foto={foto} expandida={true} alternarFavoritos={alternarFavoritos}/>
        <form method="dialog">
          <BotonIcono formMethod="dialog">
          <img src={"../public/iconos/cerrar.png"} alt="Boton Cerrar"/>
          </BotonIcono>
        </form>
      </DialogEstilizado>
      
      </>}
      
    </>
  );
};

export default ModalZoom;
