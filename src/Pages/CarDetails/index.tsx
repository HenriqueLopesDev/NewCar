import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CarsContext } from '../../contexts/CarsContext'
import {
  Apresentation,
  CarDetailsComponent,
  CarDetailsMain,
  CarCalcContainer,
  CarInformation,
  InputCalc,
  PageContainer,
  PageMainContent,
  PageTitle,
  PageTitleContainer,
  ResultSection,
} from './styles'
import { useForm } from 'react-hook-form'

export function CarDetails() {
  const params = useParams()
  const { cars } = useContext(CarsContext)
  const filteredCar = cars.filter((car) => car.model === params.carName)
  document.title = `NewGo | Detalhes do ${filteredCar[0].fullName}`

  const { register, watch } = useForm()
  const entrancevalueWatch = watch('entrancevalue')
  const taxWatch = watch('tax')
  const monthsAmountWatch = watch('monthsAmount')
  let taxFiltered = 0

  if (taxWatch) {
    taxFiltered = taxWatch.replace(',', '.')
  }

  const financiamento =
    taxFiltered /
    100 /
    (1 - Math.pow(1 + taxFiltered / 100, -monthsAmountWatch))

  const valor = parseFloat(filteredCar[0].price) * 1000 - entrancevalueWatch
  const valorFinal = valor * financiamento

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
          <PageTitleContainer>
            <PageTitle>
              <h1>Simulação de financiamento</h1>
              <h2>Informe seus dados e veja o resultado</h2>
            </PageTitle>
            <div>
              {entrancevalueWatch && taxWatch && monthsAmountWatch && (
                <ResultSection>
                  <h3>R$ {valorFinal.toFixed(2).replace('.', ',')}</h3>
                  <p>
                    durante {monthsAmountWatch} meses, totalizando R${' '}
                    {(monthsAmountWatch * valorFinal)
                      .toFixed(2)
                      .replace('.', ',')}
                  </p>
                </ResultSection>
              )}
            </div>
          </PageTitleContainer>
          <CarCalcContainer>
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
              <input
                id="entrancevalue"
                type="text"
                placeholder="Insira o valor de entrada"
                {...register('entrancevalue')}
                maxLength={10}
              />
            </InputCalc>
            <InputCalc>
              <label htmlFor="tax">Valor da taxa de juros</label>
              <input
                id="tax"
                type="text"
                placeholder="Insira o valor de entrada"
                {...register('tax')}
                maxLength={10}
              />
            </InputCalc>
            <InputCalc>
              <label htmlFor="monthsAmount">Quantidade de meses</label>
              <input
                id="monthsAmount"
                type="text"
                placeholder="Insira a quantidade meses"
                {...register('monthsAmount')}
                maxLength={2}
              />
            </InputCalc>
          </CarCalcContainer>
        </PageMainContent>
      </PageContainer>
    </CarDetailsMain>
  )
}
