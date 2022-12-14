import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
} from 'phosphor-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  ContactsMainSection,
  ContactsOptionsSection,
  FormContent,
  FormStyledButton,
  FormTitle,
  IconContainer,
  IconsContainer,
  IconTitleDescription,
  LeftSide,
  MainContacts,
  RightSide,
  RightSideContainer,
  SocialMediaIcons,
  StyledInput,
} from './styles'

export function Contatos() {
  document.title = 'NewGo | Contatos'

  function EnviarMensagem(event: any) {
    event.preventDefault()
    event.target.name.value = ''
    event.target.telefone.value = ''
    event.target.email.value = ''
    event.target.mensagem.value = ''
    toast.success(
      'Mensagem enviada com sucesso! Em breve entraremos em contato',
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      },
    )
  }

  return (
    <>
      <MainContacts>
        <ToastContainer />
        <ContactsMainSection>
          <h1>
            Entre em contato com nossa equipe de vendas e tire todas as suas
            dúvidas
          </h1>
        </ContactsMainSection>

        <ContactsOptionsSection>
          <LeftSide>
            <IconsContainer>
              <IconContainer>
                <Phone size={32} color="#0050c7" weight="fill" />
                <IconTitleDescription>
                  <h3>Telefone</h3>
                  <a href="tel:+5511932989996">+55 (11) 9 3298-9996</a>
                </IconTitleDescription>
              </IconContainer>
              <IconContainer>
                <Envelope size={32} color="#0050c7" weight="fill" />
                <IconTitleDescription>
                  <h3>E-mail</h3>
                  <a href="mailto:contato@newgo.com.br">contato@newgo.com.br</a>
                </IconTitleDescription>
              </IconContainer>
              <IconContainer>
                <MapPin size={32} color="#0050c7" weight="fill" />
                <IconTitleDescription>
                  <h3>Localização</h3>
                  <a
                    href="https://goo.gl/maps/NbYxgkuSW9n24iVt8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Acessar Google Maps
                  </a>
                </IconTitleDescription>
              </IconContainer>
              <SocialMediaIcons>
                <a
                  href="https://www.facebook.com/newgotecnologia/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookLogo size={32} color="#0050c7" weight="fill" />
                </a>
                <a
                  href="https://www.linkedin.com/company/newgotecnologia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinLogo size={32} color="#0050c7" weight="fill" />
                </a>
                <a
                  href="https://www.instagram.com/newgotecnologia/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramLogo size={32} color="#0050c7" weight="fill" />
                </a>
              </SocialMediaIcons>
            </IconsContainer>
          </LeftSide>
          <RightSide>
            <RightSideContainer>
              <FormTitle>Envie-nos uma mensagem</FormTitle>
              <FormContent onSubmit={EnviarMensagem}>
                <StyledInput
                  type="text"
                  placeholder="Nome"
                  name="name"
                  maxLength={50}
                  required
                />
                <StyledInput
                  type="text"
                  placeholder="Telefone"
                  name="telefone"
                  maxLength={20}
                  required
                />
                <StyledInput
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  maxLength={100}
                  required
                />
                <StyledInput
                  type="text"
                  placeholder="Mensagem"
                  name="mensagem"
                  maxLength={500}
                  required
                />
                <FormStyledButton type="submit">Enviar</FormStyledButton>
              </FormContent>
            </RightSideContainer>
          </RightSide>
        </ContactsOptionsSection>
      </MainContacts>
    </>
  )
}
