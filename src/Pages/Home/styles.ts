import styled from 'styled-components'
import wave from '../../assets/wave.svg'

export const HomeContainer = styled.main``

export const WelcomeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;
  padding: 2rem 10rem;
  background-image: url(${wave});
`

export const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    text-align: center;
    line-height: 1.3;
    font-size: 2rem;
    color: ${(props) => props.theme.white};
  }
`

export const ItensDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ItensIconDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.white};
  }
`

export const StyledCoin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['blue-200']};
  padding: 0.5rem;
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
`

export const CarouselSection = styled.section`
  background-color: #0066ff;
`

export const SectionTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    text-align: center;
    color: ${(props) => props.theme.white};
  }
`
