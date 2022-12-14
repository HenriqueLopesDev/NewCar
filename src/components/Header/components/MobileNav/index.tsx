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
          <a href="/">Home</a>
        </MobileNavLi>
        <MobileNavLi>
          <a href="/">Carros</a>
        </MobileNavLi>
        <MobileNavLi>
          <a href="/">Quem somos</a>
        </MobileNavLi>
        <MobileNavLi>
          <a href="/">Contatos</a>
        </MobileNavLi>
        <MobileNavLi>
          <a href="/">Parceiros</a>
        </MobileNavLi>
      </MobileUl>
    </MobileMenuContainer>
  )
}
