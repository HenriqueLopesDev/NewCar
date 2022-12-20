import { IlList, NavBar, UlList } from './styles'
import { NavLink } from 'react-router-dom'

export function PcNav() {
  return (
    <NavBar>
      <UlList>
        <IlList>
          <NavLink to="/">Home</NavLink>
        </IlList>
        <IlList>
          <NavLink to="/carros">Carros</NavLink>
        </IlList>
        <IlList>
          <NavLink to="/sobrenos">Quem somos</NavLink>
        </IlList>
        <IlList>
          <NavLink to="/contatos">Contatos</NavLink>
        </IlList>
        <IlList>
          <a href="/#parceiros">Parceiros</a>
        </IlList>
      </UlList>
    </NavBar>
  )
}
