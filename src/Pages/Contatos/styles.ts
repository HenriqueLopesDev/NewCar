import styled from 'styled-components'
import ContactsBackground from '../../assets/Contactsbannerjpg.jpg'

export const MainContacts = styled.main``

export const ContactsMainSection = styled.section`
  display: flex;
  justify-content: left;
  background-image: url(${ContactsBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 3rem 10rem;
  height: 17rem;

  h1 {
    color: ${(props) => props.theme.white};
    font-size: 2rem;
    margin-top: 1rem;
    font-family: 'Baloo 2', sans-serif;
    text-align: center;
    width: 35rem;
  }

  @media (max-width: 1390px) {
    padding: 3rem 5rem;
  }

  @media (max-width: 730px) {
    h1 {
      font-size: 1.75rem;
      margin: 0 auto;
      width: auto;
    }
  }

  @media (max-width: 805px) {
    padding: 3rem 2.5rem;
  }
`

export const ContactsOptionsSection = styled.section`
  padding: 3rem 10rem;
  display: flex;
  align-items: center;

  @media (max-width: 1390px) {
    padding: 3rem 5rem;
  }

  @media (max-width: 1200px) {
    justify-content: space-between;
  }

  @media (max-width: 805px) {
    padding: 3rem 2.5rem;
    gap: 1rem;
  }

  @media (max-width: 690px) {
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  @media (max-width: 1200px) {
    width: auto;
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
`

export const IconTitleDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['base-text']};
  }
`

export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: space-around;
`

export const RightSide = styled.div`
  width: 50%;

  @media (max-width: 1160px) {
    width: 30rem;
  }

  @media (max-width: 900px) {
    width: 25rem;
  }

  @media (max-width: 900px) {
    width: 25rem;
  }
`

export const RightSideContainer = styled.div`
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media (max-width: 420px) {
    padding: 3rem 1rem;
  }
`

export const FormTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-text']};
  font-weight: 600;
  margin: 0;
  text-align: center;
`

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 420px) {
    margin-top: 1.5rem;
  }
`

export const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid ${(props) => props.theme['base-text']};
  padding: 0 0.5rem;
  width: 100%;

  &::placeholder {
    font-size: 0.875rem;
    color: #cbcbcb;
    font-weight: 400;
  }

  &:focus {
    border-color: ${(props) => props.theme['blue-200']};
  }
`

export const FormStyledButton = styled.button`
  margin-top: 2.5rem;
  border: none;
  padding: 0.5rem;
  color: ${(props) => props.theme.white};
  font-family: 'Baloo 2', sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
  width: 30%;
  background-color: ${(props) => props.theme['blue-900']};
  transition: background-color 0.3s ease;
  border-radius: 1000px;

  &:hover {
    background-color: #004161;
  }

  @media (max-width: 420px) {
    margin-top: 0.5rem;
  }

  @media (max-width: 350px) {
    width: 60%;
  }
`
