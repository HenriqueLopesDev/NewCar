import {
  AboutUsBannerSection,
  AboutUsMain,
  BannerIcon,
  DivContainer,
  HistoryDiv,
  HistorySection,
} from './styles'
import CompanyImg from '../../assets/CompanyImg.svg'
import OfficeImg from '../../assets/OfficeImg.svg'

export function Sobrenos() {
  document.title = 'NewGo | Quem somos'
  return (
    <AboutUsMain>
      <AboutUsBannerSection>
        <h1>Conheça melhor nossa empresa e nossa equipe de profissionais</h1>
        <BannerIcon size={24} color="#fafafa" weight="bold" />
      </AboutUsBannerSection>
      <DivContainer>
        <HistoryDiv>
          <HistorySection>
            <h2>Nossa história</h2>
            <p>
              There&apos;s this notion that to grow a business, you have to be
              ruthless. But we know there&apos;s a better way to grow. One where
              what&apos;s good for the bottom line is also good for customers.
              We believe businesses can grow with a conscience, and succeed with
              a soul — and that they can do it with inbound. That&apos;s why
              we&apos;ve created an ecosystem uniting software, education, and
              community to help businesses grow better every day.
            </p>
          </HistorySection>
          <img
            src={CompanyImg}
            alt="Imagem ilustrativa do CEO da empresa junto com colaborador"
          />
        </HistoryDiv>
        <HistoryDiv>
          <img
            src={OfficeImg}
            alt="Imagem ilustrativa do CEO da empresa junto com colaborador"
          />
          <HistorySection>
            <h2>Nossa trajetória</h2>
            <p>
              There&apos;s this notion that to grow a business, you have to be
              ruthless. But we know there&apos;s a better way to grow. One where
              what&apos;s good for the bottom line is also good for customers.
              We believe businesses can grow with a conscience, and succeed with
              a soul — and that they can do it with inbound. That&apos;s why
              we&apos;ve created an ecosystem uniting software, education, and
              community to help businesses grow better every day.
            </p>
          </HistorySection>
        </HistoryDiv>
      </DivContainer>
    </AboutUsMain>
  )
}
