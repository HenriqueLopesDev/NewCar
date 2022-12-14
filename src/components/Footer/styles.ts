import styled from 'styled-components'

export const FooterApp = styled.footer`
  background: ${(props) => props.theme['blue-900']};
`

export const FooterMainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 10rem;
  justify-content: space-between;

  p {
    color: ${(props) => props.theme['gray-100']};
    width: 30rem;
    font-weight: 500;
    line-height: 1.3;
  }

  @media (max-width: 1390px) {
    padding: 2rem 5rem;
    p {
      width: 25rem;
    }
  }

  @media (max-width: 1020px) {
    p {
      width: 20rem;
    }
  }

  @media (max-width: 800px) {
    gap: 2rem;
  }

  @media (max-width: 805px) {
    padding: 2rem 2.5rem;
  }
`
export const SocialMediasIconsContainer = styled.div`
  display: flex;
  justify-content: left;
  padding: 0 10rem;
  gap: 1rem;

  @media (max-width: 1390px) {
    padding: 0 5rem;
  }

  @media (max-width: 805px) {
    padding: 0 2.5rem;
  }
`

export const IconStyle = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border: 2px solid ${(props) => props.theme['blue-800']};
  border-radius: 8px;
  transition: background 0.4s;

  &:hover {
    background: ${(props) => props.theme['blue-200']};
  }
`

export const CopyrightMessage = styled.div`
  border-top: 2.5px solid ${(props) => props.theme['blue-800']};
  margin-top: 2rem;

  h3 {
    padding: 1.5rem 0;
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-100']};
    opacity: 0.7;
    font-weight: 500;
    line-height: 1.3;
  }
`
