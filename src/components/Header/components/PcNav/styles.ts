import styled from 'styled-components'

export const NavBar = styled.nav`
  @media (max-width: 730px) {
    display: none;
  }
`

export const UlList = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 0;
  gap: 1rem;
`

export const IlList = styled.li`
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
