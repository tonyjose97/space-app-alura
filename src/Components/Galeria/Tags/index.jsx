import tags from "./tags.json";
import styled from "styled-components";

const TagContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonEstilizado = styled.button`
background-color: #7B78E5;
font-size: 24px;
margin: 20px 10px;
border-radius: 10px;
height: 35px;
width:auto;
color:#d9d9d9;
border:2px solid transparent;
transition:background-color 0.3s ease;
cursor: pointer;
&:hover{
    border-color: #c98cf1;
}
`
const ParrafoEstilizado = styled.p`
color:#d9d9d9;
`
const Tag = () => {
  return (
    <>
      <TagContainer>
        <ParrafoEstilizado>Busque por tags:</ParrafoEstilizado>
        {tags.map((tag) => {
          return <ButtonEstilizado key={tag.id}>{tag.titulo}</ButtonEstilizado>;
        })}
      </TagContainer>
    </>
  );
};

export default Tag;
