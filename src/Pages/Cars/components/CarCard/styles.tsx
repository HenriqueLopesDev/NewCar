import styled from 'styled-components'

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 0.5rem;
  width: 15rem;
  height: 17rem;
  padding: 1rem;
  background-color: #eeeeee;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px 0px;
  transition: transform 0.3s ease;

  h3 {
    font-size: 1.375rem;
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme['base-text']};
    font-weight: 500;
    margin: 0;
  }

  img {
    width: auto;
    height: auto;
    max-width: 160px;
    margin: 0 auto;
  }

  span {
    color: ${(props) => props.theme['blue-200']};
    font-weight: 600;
  }

  p {
    font-weight: 600;
    color: ${(props) => props.theme['base-text']};
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
  /* margin-top: 0.5rem; */
`

export const CarAtributte = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 400;
  }
`
