import styled from "styled-components";

const Titulo = styled.h2`
font-size: 32px;
color:#7b78e5;
text-align:${props=> props.$alingn ? props.$alingn : "left"}
`

export default Titulo