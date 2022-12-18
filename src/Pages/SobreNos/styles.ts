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
`

export const BannerIcon = styled(CaretDown)`
  margin: 0 50%;
  margin-top: 3rem;
`

export const DivContainer = styled.div`
  padding: 5rem 10rem;
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
