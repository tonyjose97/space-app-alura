import Titulo from "../../Titulo";
import Tag from "./Tags";
import Populares from "./Populares";
import styled from "styled-components";
import Imagen from "./Imagen/Index";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SeccionFluida = styled.section`
  flex-grow: 1;
`;
const ImagenesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = ({ fotos = [],alSeleccionarFoto, alternarFavoritos={alternarFavoritos} }) => {
  return (
    <>
      <Tag />
      <GaleriaContainer>
        <SeccionFluida>
          <Titulo>Navegue mas rapido</Titulo>
          <ImagenesContainer>
            {fotos.map((foto) => (
              <Imagen
              alSolicitarZoom={alSeleccionarFoto}
               key={foto.id} 
               foto={foto} alternarFavoritos={alternarFavoritos} />
            ))}
          </ImagenesContainer>
        </SeccionFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
