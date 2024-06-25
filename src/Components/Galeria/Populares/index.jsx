import styled from "styled-components"
import Titulo from "../../../Titulo"
import fotos from "./fotos-populares.json"


const ColumnasFotos = styled.section`
display:flex;
flex-direction:column;
gap:30px;
`

const Imagen = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Boton = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const Populares = ()=>{
    return (
        <section>
            <Titulo $align="center">Populares</Titulo>
            <ColumnasFotos>
            {fotos.map(foto => <Imagen key={foto.id} src={foto.path} alt={foto.alt}/>)}
            </ColumnasFotos>
            <Boton>Ver Mas</Boton>

        </section>
    )
}

export default Populares