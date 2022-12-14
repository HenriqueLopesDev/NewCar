import { List, X } from 'phosphor-react'
import styled from 'styled-components'

interface HeaderMainProps {
  isOpen: boolean
}

export const HeaderMain = styled.header<HeaderMainProps>`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['white-100']};
  padding: 1rem 10rem;
  transition: max-height 0.5s ease-in-out;
  max-height: ${({ isOpen }) => (isOpen ? '350px' : '65px')};
  overflow: hidden;
  @media (max-width: 1390px) {
    padding: 1rem 5rem;
  }

  @media (max-width: 805px) {
    padding: 1rem 2.5rem;
  }
`

export const HeaderMainMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledHamburguer = styled(List)`
  display: none;

  @media (max-width: 730px) {
    display: flex;
  }
`
export const StyledClose = styled(X)`
  display: none;

  @media (max-width: 730px) {
    display: flex;
  }
`
