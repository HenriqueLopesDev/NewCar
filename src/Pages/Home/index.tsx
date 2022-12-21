import {
  CarouselContainer,
  CarouselSection,
  HomeContainer,
  ItensDiv,
  ItensIconDiv,
  PartnersContainer,
  PartnersSection,
  ProductsSection,
  SectionTitle,
  StyledCoin,
  WelcomeMessage,
  WelcomeSection,
} from './styles'
import car from '../../assets/car.svg'
import { CaretDown, Coins, Wallet } from 'phosphor-react'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import GolLogo from '../../assets/golLogo.svg'
import SmilesLogo from '../../assets/smilesLogo.svg'
import pagolLogo from '../../assets/pagolLogo.svg'
import alticeLabsLogo from '../../assets/alticeLabsLogo.svg'
import vivoLogo from '../../assets/vivoLogo.svg'
import oiLogo from '../../assets/oiLogo.svg'
import fibrasilLogo from '../../assets/fibrasilLogo.svg'
import presentLogo from '../../assets/presentLogo.svg'
import omniLogo from '../../assets/omniLogo.svg'
import appCargoLogo from '../../assets/appCargoLogo.svg'
import guararemaLogo from '../../assets/guararemaLogo.svg'
import { NavLink } from 'react-router-dom'
import CarrosselImg1 from '../../assets/CarrosselImg1.jpg'
import CarrosselImg2 from '../../assets/CarrosselImg2.jpg'
import CarrosselImg3 from '../../assets/CarrosselImg3.jpg'

export function Home() {
  function ImgHeight() {
    if (window.innerWidth <= 530) {
      return 150
    }
    if (window.innerWidth <= 750) {
      return 300
    }
    if (window.innerWidth <= 1150) {
      return 400
    }

    return 500
  }

  document.title = 'NewGo | Sua concessionária favorita'
  return (
    <HomeContainer>
      <WelcomeSection>
        <WelcomeMessage>
          <h1>Seu automóvel dos sonhos está aqui com a gente</h1>
          <ItensDiv>
            <ItensIconDiv>
              <StyledCoin>
                <Coins size={32} color="#dedede" />
              </StyledCoin>
              <p>Parcelamento personalizado</p>
            </ItensIconDiv>
            <ItensIconDiv>
              <StyledCoin>
                <Wallet size={32} color="#dedede" />
              </StyledCoin>
              <p>Entradas acessíveis</p>
            </ItensIconDiv>
          </ItensDiv>
        </WelcomeMessage>
        <img src={car} alt="Imagem de um carro na página inicial" />
      </WelcomeSection>
      <CarouselSection>
        <SectionTitle>
          <h2>Produtos em destaque</h2>
          <CaretDown size={24} color="#FFFFFF" weight="bold" />
        </SectionTitle>
        <CarouselContainer>
          <Carousel fade wrap={true}>
            <Carousel.Item interval={3000}>
              <img
                height={ImgHeight()}
                className="d-block w-100"
                src={CarrosselImg1}
                alt="Carrossel com a imagem de um carro Volkswagen Taos 2022"
              />
              {window.innerWidth > 530 ? (
                <Carousel.Caption>
                  <h3>Volkswagen Taos 2022</h3>
                  <p>
                    De 0 a 100Km/h em 9.3 segundos. O Volkswagen Taos é nossa
                    opção perfeita para você que gosta de qualidade e conforto
                  </p>
                </Carousel.Caption>
              ) : null}
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                height={ImgHeight()}
                className="d-block w-100"
                src={CarrosselImg2}
                alt="Carrossel com a imagem de um carro Chevrolet Onix 2021"
              />
              {window.innerWidth > 530 ? (
                <Carousel.Caption>
                  <h3>Chevrolet Onix 2021</h3>
                  <p>
                    Um dos mais famosos do Brasil, o Onix 2021 revolucinou a
                    categoria de carros populares. Contando com câmbio
                    automático de 6 marchas e interior extremamente moderno
                  </p>
                </Carousel.Caption>
              ) : null}
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                height={ImgHeight()}
                className="d-block w-100"
                src={CarrosselImg3}
                alt="Carrossel com a imagem de um carro Honda Civic 2020"
              />
              {window.innerWidth > 530 ? (
                <Carousel.Caption>
                  <h3>Honda Civic 2020</h3>
                  <p>
                    Para aqueles que buscam conforto e um automóvel extremamente
                    moderno, o Honda Civic 2020 é uma opção para quem quer pagar
                    menos e ter muita qualidade
                  </p>
                </Carousel.Caption>
              ) : null}
            </Carousel.Item>
          </Carousel>
        </CarouselContainer>
      </CarouselSection>
      <PartnersContainer id="parceiros">
        <h2>Nossos parceiros</h2>
        <hr></hr>
        <PartnersSection>
          <img
            src={GolLogo}
            alt="Logo da Gol Linhas Aéreas - o texto Gol linhas aéreas inteligentes"
          />
          <img
            src={SmilesLogo}
            alt="Logo da Smiles - o texto Smiles com um sorriso abaixo"
          />
          <img src={pagolLogo} alt="Logo da PaGol - o texto PaGol" />
          <img
            src={alticeLabsLogo}
            alt="Logo da Altice Labs - o texto Altice Labs com uma letra a estilizada à esquerda"
          />
          <img
            src={vivoLogo}
            alt="Logo da Vivo - o texto Vivo e o desenho de um bonequinho à direita"
          />
          <img src={oiLogo} alt="Logo da Oi - o texto Oi" />
          <img
            src={fibrasilLogo}
            alt="Logo da FiBrasil - o texto FiBrasil com um desenho de fibras óticas à esquerda"
          />
          <img
            src={presentLogo}
            alt="Logo da Present Technologies - o texto Present"
          />
          <img
            src={omniLogo}
            alt="Logo da Omni - o texto Omni banco e financeira"
          />
          <img
            src={appCargoLogo}
            alt="Logo do AppCargo - o texto AppCargo com o desenho de um aplicativo e caminhão"
          />
          <img
            src={guararemaLogo}
            alt="Logo da Prefeitura de Guararema - o texto Prefeitura de Guararema"
          />
        </PartnersSection>
      </PartnersContainer>
      <ProductsSection>
        <h1>Ficou interessado?</h1>
        <p>
          Acesse o catálogo e conheça nossas melhores opções para você e sua
          família
        </p>
        <NavLink to="/carros">
          Clique aqui e veja todos os veículos disponíveis
        </NavLink>
      </ProductsSection>
    </HomeContainer>
  )
}
