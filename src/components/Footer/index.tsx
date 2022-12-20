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
          title="Link para a página da NewGo no Instagram"
        >
          <InstagramLogo size={18} color="#dedede" weight="fill" />
        </IconStyle>
        <IconStyle
          href="https://www.facebook.com/newgotecnologia/"
          target="_blank"
          title="Link para a página da NewGo no Facebook"
        >
          <FacebookLogo size={18} color="#dedede" weight="fill" />
        </IconStyle>
        <IconStyle
          href="https://www.linkedin.com/company/newgotecnologia"
          target="_blank"
          title="Link para a página da NewGo no LinkedIn"
        >
          <LinkedinLogo size={18} color="#dedede" weight="fill" />
        </IconStyle>
        <IconStyle
          href="mailto:contato@newgo.com.br"
          title="Link para enviar e-mail"
        >
          <Envelope size={18} color="#dedede" weight="fill" />
        </IconStyle>
        <IconStyle
          href="tel:+5511932989996"
          title="Link para ligar para a NewGo"
        >
          <Phone size={18} color="#dedede" weight="fill" />
        </IconStyle>
      </SocialMediasIconsContainer>
      <CopyrightMessage>
        <p>2022© NewGo Tecnologia. Todos os direitos reservados.</p>
      </CopyrightMessage>
    </FooterApp>
  )
}
