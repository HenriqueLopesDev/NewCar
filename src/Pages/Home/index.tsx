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

export function Home() {
  //   console.log(window.innerWidth) Fazer a responsivdade do carrossel
  document.title = 'NewGo | Sua concessionária favorita'
  return (
    <HomeContainer>
      <WelcomeSection>
        <WelcomeMessage>
          <h1>Seu próximo automóvel dos sonhos está aqui com a gente</h1>
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
          <Carousel fade>
            <Carousel.Item interval={3000}>
              <img
                height={500}
                className="d-block w-100"
                src="https://quatrorodas.abril.com.br/wp-content/uploads/2021/05/VW-Taos_11-e1622125254902.jpg?quality=70&strip=info"
                alt="Image One"
              />
              <Carousel.Caption>
                <h3>Volkswagen Taos 2022</h3>
                <p>Teste</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                height={500}
                className="d-block w-100"
                src="https://www.autoo.com.br/fotos/2022/4/1280_960/Hyundai1_13042022_71190_1280_960.jpg"
                alt="Image Two"
              />
              <Carousel.Caption>
                <h3>Teste</h3>
                <p>Teste</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                height={500}
                className="d-block w-100"
                src="https://www.autodashboard.com.br/wp-content/uploads/2019/09/honda-civic-2020.jpg"
                alt="Image Two"
              />
              <Carousel.Caption>
                <h3>Honda Civic 2020</h3>
                <p>Teste</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </CarouselContainer>
      </CarouselSection>
      <PartnersContainer id="parceiros">
        <h2>Nossos parceiros</h2>
        <hr></hr>
        <PartnersSection>
          <img src={GolLogo} alt="Logo da Gol" />
          <img src={SmilesLogo} alt="Logo da Gol" />
          <img src={pagolLogo} alt="Logo da Gol" />
          <img src={alticeLabsLogo} alt="Logo da Gol" />
          <img src={vivoLogo} alt="Logo da Gol" />
          <img src={oiLogo} alt="Logo da Gol" />
          <img src={fibrasilLogo} alt="Logo da Gol" />
          <img src={presentLogo} alt="Logo da Gol" />
          <img src={omniLogo} alt="Logo da Gol" />
          <img src={appCargoLogo} alt="Logo da Gol" />
          <img src={guararemaLogo} alt="Logo da Gol" />
        </PartnersSection>
      </PartnersContainer>
      <ProductsSection>
        <h1>Ficou interessado?</h1>
        <p>
          Acesse o catálogo e conheça nossas melhores opções para você e sua
          família
        </p>
        <a href="">Clique aqui e veja todos os veículos disponíveis</a>
      </ProductsSection>
    </HomeContainer>
  )
}
