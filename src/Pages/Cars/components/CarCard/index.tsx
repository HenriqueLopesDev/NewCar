import { Car, GasPump } from 'phosphor-react'
import { CarAtributte, Card, CarSpecifications } from './styles'

export function CarCard({
  name,
  brand,
  model,
  price,
  img,
  transmissionType,
  gasType,
}: any) {
  return (
    <Card>
      <h3>
        {brand} <span>{model}</span>
      </h3>
      <p>R$ {price}</p>
      <img src={img} alt="Imagem do Fiat Pulse cor vermelha" />
      <CarSpecifications>
        <CarAtributte>
          <Car size={20} color="#272221" weight="fill" />
          <p>{transmissionType}</p>
        </CarAtributte>
        <CarAtributte>
          <GasPump size={20} color="#272221" weight="fill" />
          <p>{gasType}</p>
        </CarAtributte>
      </CarSpecifications>
    </Card>
  )
}
