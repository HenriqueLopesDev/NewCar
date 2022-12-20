import { useContext, useMemo, useState } from 'react'
import { CarsContext } from '../../contexts/CarsContext'
import { CarCard } from './components/CarCard'
import {
  BannerPage,
  CarsCatalog,
  CarsMain,
  NoStyledLink,
  PageContent,
  Pagetitle,
  StyledSearchIcon,
} from './styles'

export function Cars() {
  document.title = 'NewGo | Carros'
  const { cars } = useContext(CarsContext)

  const [searchCar, setSearchCar] = useState('')

  const filteredCars = useMemo(() => {
    const lowerCaseSearch = searchCar.toLowerCase()
    return cars.filter((car) =>
      car.fullName.toLowerCase().includes(lowerCaseSearch),
    )
  }, [searchCar, cars])

  return (
    <CarsMain>
      <BannerPage>
        <input
          type="text"
          onChange={(event) => setSearchCar(event.target.value)}
          placeholder="Digite aqui sua busca"
          value={searchCar}
        />
        <StyledSearchIcon size={20} color="#272221" weight="bold" />
      </BannerPage>
      <PageContent>
        <Pagetitle>
          <h1>Catálogo de carros</h1>
          <h2>Explore os carros que mais gostar!</h2>
        </Pagetitle>
        <CarsCatalog>
          {!searchCar
            ? cars.map((car) => {
                return (
                  <NoStyledLink
                    to={`/carros/detalhes/${car.model}`}
                    key={car.fullName}
                  >
                    <CarCard
                      brand={car.brand}
                      model={car.model}
                      price={car.price}
                      img={car.carImg}
                      transmissionType={car.transmissionType}
                      gasType={car.gasType}
                    />
                  </NoStyledLink>
                )
              })
            : filteredCars.map((car) => {
                return (
                  <NoStyledLink
                    to={`/carros/detalhes/${car.model}`}
                    key={car.fullName}
                  >
                    <CarCard
                      brand={car.brand}
                      model={car.model}
                      price={car.price}
                      img={car.carImg}
                      transmissionType={car.transmissionType}
                      gasType={car.gasType}
                    />
                  </NoStyledLink>
                )
              })}
        </CarsCatalog>
      </PageContent>
    </CarsMain>
  )
}
