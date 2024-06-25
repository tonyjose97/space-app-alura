import styled from "styled-components"
import ItemNavegacion from "../ItemNavegacion/Index"

const ListaEstilizada = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`

const BarraLateral = ()=>{
    return(
    <aside>
        <nav>
            <ListaEstilizada>
                <ItemNavegacion iconoActivo="../public/iconos/home-activo.png" iconoInactivo="../public/iconos/home-inactivo.png" activo={true}>
                    Inicio
                </ItemNavegacion>
                <ItemNavegacion iconoActivo="../public/iconos/mas-vistas-activo.png" iconoInactivo="../public/iconos/mas-vistas-inactivo.png">
                    Mas vistas
                </ItemNavegacion>
                <ItemNavegacion iconoActivo="../public/iconos/me-gusta-activo.png" iconoInactivo="../public/iconos/me-gusta-inactivo.png">
                    Mas Me Gustas
                </ItemNavegacion>
                <ItemNavegacion iconoActivo="../public/iconos/nuevas-activo.png" iconoInactivo="../public/iconos/nuevas-inactivo.png">
                    Nuevas
                </ItemNavegacion>
                <ItemNavegacion iconoActivo="../public/iconos/sorprendeme-activo.png" iconoInactivo="../public/iconos/sorprendeme-inactivo.png">
                    Sorprendeme
                </ItemNavegacion>
            </ListaEstilizada>
        </nav>
    </aside>
    )
}

export default BarraLateral