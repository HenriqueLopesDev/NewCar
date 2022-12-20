import { Car, GasPump } from 'phosphor-react'
import { useState } from 'react'
import {
  CarAtributte,
  CarCard,
  CarsCatalog,
  CarsMain,
  CarSpecifications,
  Pagetitle,
} from './styles'

/* Início da importação da imagem dos carros */
import Onix2022 from '../../assets/Onix2022.png'
import Hb202022 from '../../assets/Hb202022.png'
/* Fim da importação da imagem dos carros */

export function Cars() {
  const [cars, setNewCar] = useState([
    {
      fullName: 'Fiat Pulse',
      brand: 'Fiat',
      carImg:
        'https://cdn.discordapp.com/attachments/844759777476608000/1054537116043968612/pulse-v2.png',
      model: 'Pulse',
      price: '98.316,00',
      transmissionType: 'Automático',
      gasType: 'Gasolina',
    },
    {
      fullName: 'Fiat Mobi',
      brand: 'Fiat',
      carImg:
        'https://cdn.discordapp.com/attachments/844759777476608000/1054536991250845696/0000_mobi.png',
      model: 'Mobi',
      price: '96.316,00',
      transmissionType: 'Manual',
      gasType: 'Álcool',
    },
    {
      fullName: 'Fiat Abarth',
      brand: 'Fiat',
      carImg:
        'https://cdn.discordapp.com/attachments/844759777476608000/1054537064298860684/abarth.png',
      model: 'Abarth',
      price: '98.316,00',
      transmissionType: 'Automático',
      gasType: 'Híbrido',
    },
    {
      fullName: 'Fiat Strada',
      brand: 'Fiat',
      carImg:
        'https://cdn.discordapp.com/attachments/844759777476608000/1054537196608172102/strada.png',
      model: 'Strada',
      price: '98.316,00',
      transmissionType: 'Manual',
      gasType: 'Álcool',
    },
    {
      fullName: 'Fiat Toro',
      brand: 'Fiat',
      carImg:
        'https://cdn.discordapp.com/attachments/844759777476608000/1054537263146610728/0008_toro.png',
      model: 'Toro',
      price: '98.316,00',
      transmissionType: 'Automático',
      gasType: 'Gasolina',
    },
    {
      fullName: 'Fiat Toro',
      brand: 'Fiat',
      carImg: Onix2022,
      model: 'Toro',
      price: '98.316,00',
      transmissionType: 'Manual',
      gasType: 'Híbrido',
    },
    {
      fullName: 'Fiat Toro',
      brand: 'Fiat',
      carImg: Hb202022,
      model: 'Toro',
      price: '98.316,00',
      transmissionType: 'Automático',
      gasType: 'Gasolina',
    },
  ])

  return (
    <CarsMain>
      <Pagetitle>
        <h1>Catálogo de carros</h1>
        <h2>Explore os carros que mais gostar!</h2>
      </Pagetitle>
      <CarsCatalog>
        {cars.map((car) => {
          return (
            <CarCard key={car.fullName}>
              <h3>
                {car.brand} <span>{car.model}</span>
              </h3>
              <p>R$ {car.price}</p>
              <img src={car.carImg} alt="Imagem do Fiat Pulse cor vermelha" />
              <CarSpecifications>
                <CarAtributte>
                  <Car size={24} color="#272221" weight="fill" />
                  <p>{car.transmissionType}</p>
                </CarAtributte>
                <CarAtributte>
                  <GasPump size={24} color="#272221" weight="fill" />
                  <p>{car.gasType}</p>
                </CarAtributte>
              </CarSpecifications>
            </CarCard>
          )
        })}
      </CarsCatalog>
    </CarsMain>
  )
}
