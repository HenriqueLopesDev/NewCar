import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CarsContext } from '../../contexts/CarsContext'
import {
  Apresentation,
  CarDetailsComponent,
  CarDetailsMain,
  CarFinalValueContainer,
  CarInformation,
  InputCalc,
  PageContainer,
  PageMainContent,
} from './styles'

export function CarDetails() {
  const params = useParams()
  const { cars } = useContext(CarsContext)
  const filteredCar = cars.filter((car) => car.model === params.carName)
  document.title = `NewGo | Detalhes do ${filteredCar[0].fullName}`
  return (
    <CarDetailsMain>
      <PageContainer>
        <Apresentation>
          <CarDetailsComponent>
            <h1>{filteredCar[0].fullName}</h1>
            <CarInformation>
              <p>Fabricante: {filteredCar[0].brand}</p>
              <p>Modelo: {filteredCar[0].model}</p>
              <p>Preço: R$ {filteredCar[0].price}</p>
              <p>Tipo de transmissão: {filteredCar[0].transmissionType}</p>
              <p>Tipo de combustível: {filteredCar[0].gasType}</p>
            </CarInformation>
          </CarDetailsComponent>
          <img src={filteredCar[0].carImg} alt="" />
        </Apresentation>
        <PageMainContent>
          <h1>Simulação de financiamento</h1>
          <h2>Informe seus dados e veja o resultado</h2>
          <CarFinalValueContainer>
            <InputCalc>
              <label htmlFor="carprice">Preço do automóvel</label>
              <input
                id="carprice"
                type="text"
                value={`R$ ${filteredCar[0].price}`}
                disabled
              />
            </InputCalc>
            <InputCalc>
              <label htmlFor="entrancevalue">Valor de entrada</label>
              <input id="entrancevalue" type="text" maxLength={10} />
            </InputCalc>
            <InputCalc>
              <label htmlFor="tax">Valor da taxa de juros</label>
              <input id="tax" type="text" maxLength={10} />
            </InputCalc>
            <InputCalc>
              <label htmlFor="monthsAmount">Quantidade de meses</label>
              <input id="monthsAmount" type="text" maxLength={10} />
            </InputCalc>
          </CarFinalValueContainer>
        </PageMainContent>
      </PageContainer>
    </CarDetailsMain>
  )
}
