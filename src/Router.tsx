import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Contatos } from './Pages/Contatos'
import { Errorpage } from './Pages/Errorpage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contatos" element={<Contatos />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  )
}
