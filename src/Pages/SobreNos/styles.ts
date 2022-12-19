import { CaretDown } from 'phosphor-react'
import styled from 'styled-components'
import Banner from '../../assets/QuemsomosBanner.svg'
export const AboutUsMain = styled.main``

export const AboutUsBannerSection = styled.section`
  background-image: url(${Banner});
  background-size: cover;
  background-position: center;
  padding: 3rem 10rem 0.5rem 10rem;

  h1 {
    text-align: center;
    color: ${(props) => props.theme.white};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 500;
    padding: 0;
    margin-top: 1rem;
    width: 30rem;
  }

  @media (max-width: 1390px) {
    padding: 3rem 5rem 0.5rem 5rem;
  }

  @media (max-width: 850px) {
    h1 {
      font-size: 1.75rem;
      margin: 0 auto;
      width: auto;
    }
  }
`

export const BannerIcon = styled(CaretDown)`
  margin: 0 50%;
  margin-top: 3rem;
`

export const DivContainer = styled.div`
  padding: 5rem 10rem;

  @media (max-width: 1390px) {
    padding: 5rem;
  }

  @media (max-width: 805px) {
    padding: 5rem 2.5rem;
  }
`
export const HistoryDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 10rem;
  align-items: center;
  margin-bottom: 4rem;

  img {
    border-radius: 2px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);
  }

  @media (max-width: 1300px) {
    gap: 8rem;
  }

  @media (max-width: 1250px) {
    gap: 6rem;
  }

  @media (max-width: 1170px) {
    gap: 4rem;
  }

  @media (max-width: 970px) {
    img {
      width: 40%;
      height: 40%;
    }
  }

  @media (max-width: 850px) {
    flex-wrap: wrap;
    img {
      width: 60%;
      height: 60%;
    }
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    img {
      width: 80%;
      height: 80%;
    }
  }

  @media (max-width: 470px) {
    flex-wrap: wrap;
    img {
      width: 100%;
      height: 100%;
    }
  }
`

export const HistorySection = styled.section`
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 500;
    margin: 0;
  }

  p {
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 300;
    text-align: justify; /*Talvez remover*/
    line-height: 2;
  }
`

export const AttributesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 4rem;

  @media (max-width: 1110px) {
    gap: 2rem;
  }

  @media (max-width: 1050px) {
    flex-wrap: wrap;
  }
`

export const AttributeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  h3 {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
  }

  p {
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 300;
    text-align: justify;
    margin: 0;
    width: 20rem;
  }

  @media (max-width: 400px) {
    p {
      width: auto;
    }
  }
`
