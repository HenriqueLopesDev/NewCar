import styled from 'styled-components'
import wave from '../../assets/wave.svg'
import circles from '../../assets/blobTeste.svg'

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
    margin: 0;
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
  /* background-color: #0066ff; */
  background-image: url(${circles});
  padding: 3rem 15rem;
`

export const SectionTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.625rem;
    font-weight: 500;
    text-align: center;
    color: ${(props) => props.theme.white};
  }
`

export const CarouselContainer = styled.div`
  border: 3px solid white;
  border-radius: 4px;
  box-shadow: 10px 10px 10px rgb(0 0 0/ 0.4);
`

export const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: rgb(0, 204, 153);
  background: -moz-linear-gradient(
    90deg,
    rgba(0, 204, 153, 1) 0%,
    rgba(0, 57, 194, 0.7794468129048494) 50%,
    rgba(102, 0, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(0, 204, 153, 1) 0%,
    rgba(0, 57, 194, 0.7794468129048494) 50%,
    rgba(102, 0, 255, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(0, 204, 153, 1) 0%,
    rgba(0, 57, 194, 0.7794468129048494) 50%,
    rgba(102, 0, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00cc99",endColorstr="#6600ff",GradientType=1);
  padding: 4rem 10rem;

  h1 {
    font-size: 1.875rem;
    color: ${(props) => props.theme.white};
    font-weight: 500;
  }

  p {
    font-size: 1.125rem;
    color: ${(props) => props.theme.white};
    font-weight: 500;
  }

  a {
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: ${(props) => props.theme['white-100']};
    font-weight: 600;
    border-radius: 40px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.6);
    background: rgb(0, 0, 0, 0.3);
    transition: background 0.4s;

    &:hover {
      background: rgb(0, 0, 0, 0.45);
    }
  }
`
