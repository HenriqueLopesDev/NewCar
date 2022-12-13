import styled from 'styled-components'

export const HeaderMain = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme['white-100']};
  padding: 1rem 10rem;
`
export const UlList = styled.ul`
  display: flex;
  list-style: none;
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
