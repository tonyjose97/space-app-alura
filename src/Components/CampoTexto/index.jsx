import styled from "styled-components"
import search from "./search.png"


const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: solid 2px;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #d9d9d9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: none;
    `

const ContainerEstilizado = styled.div`
position:relative;
display: inline-block;
`
const IconoLupa = styled.img`
position: absolute;
top:18px;
right:18px;
width:38px !important;
height:20px;
`


const CampoTexto = ( ) =>{
    return<ContainerEstilizado>
        <CampoTextoEstilizado type="text" placeholder="Que estas buscando?"/>
        <IconoLupa src={search} alt="icono de lupa"/>
       
    </ContainerEstilizado>
}

export default CampoTexto