import { NavLink } from 'react-router-dom'
import {
  MobileNavBar,
  MobileUl,
  MobileMenuContainer,
  MobileNavLi,
} from './styles'

export function MobileNav() {
  return (
    <MobileMenuContainer>
      <MobileNavBar></MobileNavBar>
      <MobileUl>
        <MobileNavLi>
          <NavLink to="/">Home</NavLink>
        </MobileNavLi>
        <MobileNavLi>
          <NavLink to="/">Carros</NavLink>
        </MobileNavLi>
        <MobileNavLi>
          <NavLink to="/sobrenos">Quem somos</NavLink>
        </MobileNavLi>
        <MobileNavLi>
          <NavLink to="/contatos">Contatos</NavLink>
        </MobileNavLi>
        <MobileNavLi>
          <NavLink to="/">Parceiros</NavLink>
        </MobileNavLi>
      </MobileUl>
    </MobileMenuContainer>
  )
}
