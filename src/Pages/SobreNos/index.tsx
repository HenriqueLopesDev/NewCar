import {
  AboutUsBannerSection,
  AboutUsMain,
  AttributesContainer,
  AttributeSection,
  BannerIcon,
  DivContainer,
  HistoryDiv,
  HistorySection,
} from './styles'
import CompanyImg from '../../assets/CompanyImgjpg.jpg'
import OfficeImg from '../../assets/OfficeImgjpg.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'
export function Sobrenos() {
  document.title = 'NewGo | Quem somos'
  return (
    <AboutUsMain>
      <AboutUsBannerSection>
        <h1>Conheça melhor nossa empresa e nossa equipe de profissionais</h1>
        <BannerIcon size={24} color="#fafafa" weight="bold" />
      </AboutUsBannerSection>
      <DivContainer>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOnce={true}
          animatePreScroll={false}
        >
          <HistoryDiv>
            <HistorySection>
              <h2>Nossa história</h2>
              <p>
                A NewGo Tecnologia nasceu a partir de um sonho, construir o
                melhor do software utilizando as melhores tecnologias atuais do
                mercado, e entregar a maior qualidade possível para nossos
                clientes e pessoas com tecnologia, tornando cada experiência
                única e inigualável. Por isso, nascemos em 2018 auxiliando
                empresas através da criação de software (aplicativos e sistemas
                de informação), terceirização de profissionais, consultoria de
                tecnologia e treinamento de equipes de TI. Atualmente a NewGo
                presta serviços para diversas empresas no mercado nacional e em
                países estrangeiros como Estados Unidos, Portugal e Espanha.
              </p>
            </HistorySection>
            <img
              src={CompanyImg}
              alt="Imagem ilustrativa do CEO da empresa junto com colaborador"
            />
          </HistoryDiv>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOnce={true}
          animatePreScroll={false}
        >
          <HistoryDiv>
            <img
              src={OfficeImg}
              alt="Imagem ilustrativa do CEO da empresa junto com colaborador"
            />
            <HistorySection>
              <h2>Nossa trajetória</h2>
              <p>
                Desde o começo, a NewGo sempre buscou oferecer a melhor
                experiência possível para nossos clientes. Para isso, utilizamos
                do que há de melhor disponível no mercado atual da tecnologia.
                Tivemos ínumeros cases de sucesso como o redesign da busca de
                voos e compra, em que auxiliamos a Gol Linhas Aéreas na
                reformulação da principal experiência para os seus clientes:
                busca e compra de voos; Streaming de filmes e canais de alta
                qualidade, projeto em conjunto com a Open Labs, empresa do grupo
                Altice Labs, em que desenvolvemos e nos tornamos responsáveis
                pela manutenção da experiência do usuário do serviço de
                streaming da Oi, chamado Oi Play. Busca de serviços e produtos
                em mapa mundi, em que projetamos e desenvolvemos uma
                funcionalidade de busca e navegação por meio de um Mapa Mundi
                para o site da Smiles.
              </p>
            </HistorySection>
          </HistoryDiv>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce={true}
          animatePreScroll={false}
        >
          <AttributesContainer>
            <AttributeSection>
              <h3>Missão</h3>
              <p>
                Ser um time obstinado em prever e atender as necessidades de
                nossos clientes e consumidores sempre agregando valores.
              </p>
            </AttributeSection>
            <AttributeSection>
              <h3>Visão</h3>
              <p>
                Disponibilizar às pessoas software de excelente qualidade – a
                qualquer momento, em qualquer local e em qualquer dispositivo.
              </p>
            </AttributeSection>
            <AttributeSection>
              <h3>Valores</h3>
              <p>
                Apaixonados; autênticos; comprometidos; honestos; inovadores e
                inspiradores.
              </p>
            </AttributeSection>
          </AttributesContainer>
        </AnimationOnScroll>
      </DivContainer>
    </AboutUsMain>
  )
}
