import styled from "styled-components";
import GlobalStyles from "./Components/GlobalStyles";
import Cabecera from "./Components/Cabecera";
import BarraLateral from "./Components/BarraLateral";
import Banner from "./Components/Banner";
import imgBanner from "./assets/imgBanner.png";
import Galeria from "./Components/Galeria";
import fotos from "./fotos.json";
import { useEffect, useState } from "react";
import ModalZoom from "./Components/ModalZoom";
import Pie from "./Components/Pie";

const FondoGradiente = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;
const AppContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;
const ContenidoGaleria = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoSeleccionadas, setFotoSeleccionadas] = useState(null);

  const alternarFavoritos = (foto) => {
    if (foto.id === fotoSeleccionadas?.id) {
      setFotoSeleccionadas({
        ...fotoSeleccionadas,
        favorita: !foto.favorita,
      });
    }

    setFotosGaleria(
      fotosGaleria.map((fotosGaleria) => {
        return {
          ...fotosGaleria,
          favorita:
            fotosGaleria.id === foto.id
              ? !foto.favorita
              : fotosGaleria.favorita,
        };
      })
    );
  };

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner
                texto="La galeria mas completa del mundo"
                backgroundImage={imgBanner}
              />
              <Galeria
                alSeleccionarFoto={(foto) => setFotoSeleccionadas(foto)}
                fotos={fotosGaleria}
                alternarFavoritos={alternarFavoritos}
              />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom
          foto={fotoSeleccionadas}
          alCerrar={() => setFotoSeleccionadas(null)}
          alternarFavoritos={alternarFavoritos}/>
        <Pie />
      </FondoGradiente>
    </>
  );
};

export default App;
