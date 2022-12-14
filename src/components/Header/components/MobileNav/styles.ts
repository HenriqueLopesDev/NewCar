import styled from 'styled-components'

export const MobileMenuContainer = styled.div`
  display: none;
  flex-direction: column;
  @media (max-width: 730px) {
    display: flex;
  }
`

export const MobileNavBar = styled.nav``

export const MobileUl = styled.ul`
  margin-top: 1rem;
  list-style: none;
  display: none;
  @media (max-width: 730px) {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    justify-content: center;
  }
`
export const MobileNavLi = styled.li`
  text-align: center;

  a {
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme['base-text']};
    font-weight: 600;
    transition: color 0.3s;

    &:hover {
      color: ${(props) => props.theme['blue-200']};
    }
  }
`
