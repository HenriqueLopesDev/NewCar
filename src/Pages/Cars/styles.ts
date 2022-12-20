import { MagnifyingGlass } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import CarsBanner from '../../assets/CarsBanner.jpg'

export const CarsMain = styled.main``

export const BannerPage = styled.div`
  background-image: url(${CarsBanner});
  padding: 10rem 10rem 0 10rem;
  display: flex;
  justify-content: center;

  input {
    bottom: 0;
    margin-bottom: -2rem;
    font-size: 1.125rem;
    width: 70%;
    height: 3rem;
    border: 2px solid #aeaeae;
    border-radius: 8px;
    padding: 0.25rem 1rem;

    &::placeholder {
      font-size: 1rem;
    }

    &:focus {
      border-color: ${(props) => props.theme['blue-200']};
    }
  }

  @media (max-width: 1200px) {
    input {
      width: 80%;
    }
  }

  @media (max-width: 900px) {
    padding: 8rem 6rem 0 6rem;
    input {
      width: 100%;
    }
  }

  @media (max-width: 750px) {
    padding: 8rem 2rem 0 2rem;
  }

  @media (max-width: 600px) {
    padding: 8rem 4rem 0 4rem;
  }

  @media (max-width: 500px) {
    padding: 8rem 2.5rem 0 2.5rem;
  }

  @media (max-width: 300px) {
    padding: 8rem 0.5rem 0rem 0.5rem;
  }
`
export const StyledSearchIcon = styled(MagnifyingGlass)`
  position: relative;
  transform: translate(-40px, 15px);
  cursor: pointer;
`

export const PageContent = styled.div`
  padding: 3rem 10rem;
  margin-top: 2rem;

  @media (max-width: 1390px) {
    padding: 3rem 5rem;
  }

  @media (max-width: 805px) {
    padding: 3rem 2.5rem;
  }
`

export const Pagetitle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 500;
    margin: 0;
  }
`

export const CarsCatalog = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`

export const NoStyledLink = styled(NavLink)`
  text-decoration: none;
`
