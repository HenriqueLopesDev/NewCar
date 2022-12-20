import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Contatos } from './Pages/Contatos'
import { Errorpage } from './Pages/Errorpage'
import { Sobrenos } from './Pages/SobreNos'
import { Cars } from './Pages/Cars'
import { CarDetails } from './Pages/CarDetails'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobrenos" element={<Sobrenos />} />
      <Route path="/contatos" element={<Contatos />} />
      <Route path="/carros" element={<Cars />} />
      <Route path="/carros/detalhes/:carName" element={<CarDetails />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  )
}
