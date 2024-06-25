import styled from "styled-components"

const PieEstilizado = styled.footer`
    display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-top: 100px;
	background-color: #04244F;
	padding: 22px;
	box-sizing: border-box;

`
const UlEstilizado = styled.ul`
    margin: 0;
	padding: 0;
	list-style: none;
	li {
    	display: inline-block;
    	margin-right: 32px;
	}
    img{
        width:25px;
        height: 18px;
    }

`
const PieImagenes = styled.img`

width:36px;
`

const Parrafo = styled.p`
    color:#d9d9d9;
    font-size: 16px;
	margin: 0;
`
const Pie = ()=>{
    return(
        <PieEstilizado>
            <UlEstilizado>

                <li>
                    <a href="https://github.com/tonyjose97">
                        <img src="../public/img/redes/github.svg" alt="Github" />
                    </a>
                </li>

                <li>
                    <a href="www.linkedin.com/in/anthony-carmona-75807a23a">
                        <img src="../public/img/redes/linkedin.svg" alt="linkedin" />
                    </a>
                </li>

                <li>
                    <a href="https://github.com/tonyjose97">
                        <img src="../public/img/redes/twitter.svg" alt="Github" />
                    </a>
                </li>   
            </UlEstilizado>
            <Parrafo>Desarrollado por Anthony C.</Parrafo>
        </PieEstilizado>
    )
}

export default Pie