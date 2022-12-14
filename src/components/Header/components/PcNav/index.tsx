import { IlList, NavBar, UlList } from './styles'

export function PcNav() {
  return (
    <NavBar>
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
    </NavBar>
  )
}
