import { HeaderMain, IlList, UlList } from './styles'
import newGologo from '../../assets/newGologo.svg'

export function Header() {
  return (
    <HeaderMain>
      <img src={newGologo} alt="Logo da NewGo" />
      <nav>
        <UlList>
          <IlList>
            <a href="/">Home</a>
          </IlList>
          <IlList>
            <a href="/">Carros</a>
          </IlList>
          <IlList>
            <a href="/">Quem somos</a>
          </IlList>
          <IlList>
            <a href="/">Contatos</a>
          </IlList>
          <IlList>
            <a href="/">Parceiros</a>
          </IlList>
        </UlList>
      </nav>
    </HeaderMain>
  )
}
