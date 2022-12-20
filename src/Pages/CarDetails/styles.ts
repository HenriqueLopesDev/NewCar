import styled from 'styled-components'

export const CarDetailsMain = styled.main``

export const PageContainer = styled.div`
  padding: 3rem 10rem;

  img {
    width: auto;
    height: auto;
    max-width: 460px;
    right: 0;
  }
`

export const Apresentation = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CarDetailsComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 1rem 0;
  width: 20rem;
  background-color: #eeeeee;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px 0px;
  gap: 1rem;

  h1 {
    font-size: 1.5rem;
    text-align: center;
    padding: 0.75rem 0;
    border-bottom: 2px solid ${(props) => props.theme['blue-200']};
    width: 100%;
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme['base-text']};
    font-weight: 600;
    margin: 0;
  }
`

export const CarInformation = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: auto;
  p {
    margin: 0;
    color: black;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
`

export const PageMainContent = styled.div`
  margin-top: 3rem;

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

export const CarFinalValueContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
`

export const InputCalc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    width: 100%;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    outline: none;
    border: 2px solid ${(props) => props.theme['blue-200']};
  }

  input:disabled {
    background-color: ${(props) => props.theme['white-100']};
    cursor: not-allowed;
  }
`
