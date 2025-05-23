import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import PlayGame from './pages/game/PlayGame.jsx' // Importa o componente PlayGame

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<PlayGame />} /> {/* Rota para o jogo */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
