import {
  CarouselSection,
  HomeContainer,
  ItensDiv,
  ItensIconDiv,
  SectionTitle,
  StyledCoin,
  WelcomeMessage,
  WelcomeSection,
} from './styles'
import car from '../../assets/car.svg'
import { CaretDown, Coins, Wallet } from 'phosphor-react'

export function Home() {
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
          <h2>Conheça nossos destaques</h2>
          <CaretDown size={24} color="#FFFFFF" weight="bold" />
        </SectionTitle>
      </CarouselSection>
    </HomeContainer>
  )
}
