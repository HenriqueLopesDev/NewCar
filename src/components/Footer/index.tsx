import {
  CopyrightMessage,
  FooterApp,
  FooterMainContent,
  IconStyle,
  SocialMediasIconsContainer,
} from './styles'
import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  Phone,
  Envelope,
} from 'phosphor-react'

export function Footer() {
  return (
    <FooterApp>
      <FooterMainContent>
        <p>
          O que nos motiva é criar um mundo melhor para o negócio dos nossos
          clientes e para as pessoas com tecnologia.
        </p>
        <p>
          R. Vitório Partênio, 142 - Vila Partênio, Mogi das Cruzes - SP -
          Brasil, CEP 08780-410
        </p>
      </FooterMainContent>
      <SocialMediasIconsContainer>
        <IconStyle
          href="https://www.instagram.com/newgotecnologia/"
          target="_blank"
        >
          <InstagramLogo size={18} color="#dedede" weight="fill" />
        </IconStyle>
        <IconStyle
          href="https://www.facebook.com/newgotecnologia/"
          target="_blank"
        >
          <FacebookLogo size={18} color="#dedede" weight="fill" />
        </IconStyle>
        <IconStyle
          href="https://www.linkedin.com/company/newgotecnologia"
          target="_blank"
        >
          <LinkedinLogo size={18} color="#dedede" weight="fill" />
        </IconStyle>
        <IconStyle href="mailto:contato@newgo.com.br">
          <Envelope size={18} color="#dedede" weight="fill" />
        </IconStyle>
        <IconStyle href="tel:+5511932989996">
          <Phone size={18} color="#dedede" weight="fill" />
        </IconStyle>
      </SocialMediasIconsContainer>
      <CopyrightMessage>
        <p>2022© NewGo Tecnologia. Todos os direitos reservados.</p>
      </CopyrightMessage>
    </FooterApp>
  )
}
