import React from 'react';
import "./home.css";
import { FaTrashAlt, FaRecycle } from 'react-icons/fa';
import { GiTrashCan } from 'react-icons/gi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function Home() {
  const [started, setStarted] = useState(false);
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleStart = () => {
    setStarted(true);
    navigate('/play'); // Navega para a rota /play ao clicar em Iniciar
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">Coleta Seletiva</h1>
        <h2 className="home-subtitle">Jogo de Coleta Seletiva</h2>
        <div className="home-icons">
          <div className="bin-01 bin-metal-01">
            <FaTrashAlt size={40} />
            <span>Metal</span>
          </div>
           <div className="bin-01 bin-medica-01">
            <FaTrashAlt size={40} />
            <span>Resíduo Químico</span>
          </div>
          <div className="bin-01 bin-paper-01">
            <FaTrashAlt size={40} />
            <span>Papel</span>
          </div>
          <div className="bin-01 bin-plastic-01">
            <FaTrashAlt size={40} />
            <span>Plástico</span>
          </div>
          <div className="bin-01 bin-glass-01">
            <FaTrashAlt size={40} />
            <span>Vidro</span>
          </div>
          <div className="bin-01 bin-infecto-01">
            <FaTrashAlt size={40} />
            <span>Infectante</span>
          </div>
        </div>
        <div className="home-instructions">
          <p>Bem-vindo ao jogo de coleta seletiva! Aprenda brincando a separar corretamente os materiais recicláveis.</p>
          <ul>
            <li>O lixo vai caindo na tela.</li>
            <li>Seu objetivo é clicar (ou tocar) na lixeira correta para cada tipo de lixo.</li>
            <li>Quanto mais acertos, mais pontos você faz!</li>
          </ul>
        </div>
        <button className="start-btn" onClick={handleStart}>Iniciar</button>
      </div>
    </div>
  );
}

export default Home;