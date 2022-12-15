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
          <a href="/">Carros</a>
        </IlList>
        <IlList>
          <a href="/">Quem somos</a>
        </IlList>
        <IlList>
          <NavLink to="/contatos">Contatos</NavLink>
        </IlList>
        <IlList>
          <a href="/">Parceiros</a>
        </IlList>
      </UlList>
    </NavBar>
  )
}
