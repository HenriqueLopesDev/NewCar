import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CarsContext } from '../../contexts/CarsContext'

export function CarDetails() {
  const params = useParams()
  const { cars } = useContext(CarsContext)

  const filteredCar = cars.filter((car) => car.model === params.carName)
  console.log(filteredCar)
  return <h1>{filteredCar[0].brand}</h1>
}
