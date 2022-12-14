import {
  HeaderMain,
  HeaderMainMenu,
  StyledClose,
  StyledHamburguer,
} from './styles'
import newGologo from '../../assets/newGologo.svg'
import { PcNav } from './components/PcNav'
import { MobileNav } from './components/MobileNav'
import { useState } from 'react'

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <HeaderMain isOpen={isMobileMenuOpen}>
      <HeaderMainMenu>
        <img src={newGologo} alt="Logo da NewGo" />
        <PcNav />
        {!isMobileMenuOpen ? (
          <StyledHamburguer
            onClick={() => setMobileMenuOpen(true)}
            size={24}
            color="#272221"
            weight="bold"
          />
        ) : (
          <StyledClose
            onClick={() => setMobileMenuOpen(false)}
            size={24}
            color="#272221"
            weight="bold"
          />
        )}
      </HeaderMainMenu>
      <MobileNav />
    </HeaderMain>
  )
}
