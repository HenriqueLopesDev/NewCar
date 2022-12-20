import styled from 'styled-components'

export const CarsMain = styled.main`
  padding: 3rem 10rem;

  @media (max-width: 1390px) {
    padding: 3rem 5rem;
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

export const CarCard = styled.section`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 0.5rem;
  width: 17rem;
  height: 17rem;
  padding: 1rem;
  background-color: #eeeeee;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px 0px;
  transition: transform 0.3s ease;

  h3 {
    font-size: 1.375rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    margin: 0;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  span {
    color: ${(props) => props.theme['blue-200']};
    font-weight: 600;
  }

  p {
    font-weight: 600;
    margin: 0;
  }

  &:hover {
    transform: scale(1.02);
  }
`

export const CarSpecifications = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`

export const CarAtributte = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 400;
  }
`
