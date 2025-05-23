import "./playgame.css"
import { useState, useEffect, useRef, useCallback } from 'react';
import { FaTrashAlt, FaHeart } from "react-icons/fa";
import IconePlastico from "../../components/icones/IconePlastico";
import IconePapel from "../../components/icones/IconePapel";
import IconeMetal from "../../components/icones/IconeMetal";
import IconeVidro from "../../components/icones/IconeVidro";

const ALTURA_ITEM = 40;
const VELOCIDADE_QUEDA = 2;
const INTERVALO_JOGO_MS = 50;

const todosItensJogo = [
  { id: 'pl1', icon: <IconePlastico />, type: 'plastic', name: 'Item Plastico' },
  { id: 'p1', icon: <IconePapel />, type: 'paper', name: 'Item Papel' },
  { id: 'm1', icon: <IconeMetal />, type: 'metal', name: 'Item Metal' },
  { id: 'g1', icon: <IconeVidro />, type: 'glass', name: 'Item Vidro' },
];

function PlayGame() {
  const [pontuacao, setPontuacao] = useState(0);
  const [vidas, setVidas] = useState(3);
  const [itemCaindo, setItemCaindo] = useState(null);
  const [fimDeJogo, setFimDeJogo] = useState(false);

  const areaJogoRef = useRef(null);
  const areaItensCaindoRef = useRef(null);
  const idItemProcessadoQuedaRef = useRef(null);

  const gerarNovoItem = useCallback(() => {
    const indiceAleatorio = Math.floor(Math.random() * todosItensJogo.length);
    const novoItem = todosItensJogo[indiceAleatorio];
    const larguraAreaJogo = areaItensCaindoRef.current ? areaItensCaindoRef.current.offsetWidth : 300;
    const deslocamentoAleatorioEsquerda = (Math.random() - 0.5) * (larguraAreaJogo * 0.5);

    setItemCaindo({
      ...novoItem,
      top: 0,
      left: Math.max(0, Math.min(larguraAreaJogo - 30, (larguraAreaJogo / 2) - 15 + deslocamentoAleatorioEsquerda)),
      idInstancia: Date.now()
    });
  }, []); 

  useEffect(() => {
    if (fimDeJogo || !itemCaindo) return;

    const loopJogo = setInterval(() => {
      setItemCaindo(itemAnterior => {
        if (!itemAnterior) return null;

        const novoTopo = itemAnterior.top + VELOCIDADE_QUEDA;
        const alturaAreaJogo = areaItensCaindoRef.current ? areaItensCaindoRef.current.offsetHeight : 400;

        if (novoTopo + ALTURA_ITEM > alturaAreaJogo) {
          if (idItemProcessadoQuedaRef.current === itemAnterior.idInstancia) {
            return null; 
          }
          idItemProcessadoQuedaRef.current = itemAnterior.idInstancia; // Mark it as processed

          if (itemAnterior.type !== 'trash') {
            setVidas(vidasAnteriores => Math.max(0, vidasAnteriores - 1));
          }
          return null; 
        }
        return { ...itemAnterior, top: novoTopo };
      });
    }, INTERVALO_JOGO_MS);

    return () => clearInterval(loopJogo);
  }, [itemCaindo, fimDeJogo]);

  useEffect(() => {
    if (vidas <= 0 && !fimDeJogo) {
      setFimDeJogo(true);
      setItemCaindo(null);
    }
  }, [vidas, fimDeJogo]);

  useEffect(() => {
    if (!itemCaindo && !fimDeJogo && vidas > 0) {
      const timerId = setTimeout(() => {
        gerarNovoItem();
      }, 100); 
      return () => clearTimeout(timerId);
    }
  }, [itemCaindo, fimDeJogo, vidas, gerarNovoItem]);

  const aoClicarNaLixeira = (tipoLixeira) => {
    if (!itemCaindo || fimDeJogo) return;

    if (itemCaindo.type === tipoLixeira) {
      setPontuacao(pontuacaoAnterior => pontuacaoAnterior + 10);
    } else {
      setVidas(vidasAnteriores => Math.max(0, vidasAnteriores - 1));
    }

    setItemCaindo(null); 
  };
  
  const reiniciarJogo = () => {
    setPontuacao(0);
    setVidas(3);
    setFimDeJogo(false);
    setItemCaindo(null);
    idItemProcessadoQuedaRef.current = null; 
  };


  return (
    <div className="playgame-container" ref={areaJogoRef}>
      <div className="game-area">
        <div className="score-board">
          <p>Pontuação: <span className="score-value">{pontuacao}</span></p>
          <div className="lives-container">
            {Array(vidas).fill(null).map((_, i) => (
              <FaHeart key={i} className="heart-icon" />
            ))}
          </div>
        </div>
        <div className="falling-items-area" ref={areaItensCaindoRef}>
          {itemCaindo && (
            <div
              key={itemCaindo.idInstancia}
              className="falling-item"
              style={{ top: `${itemCaindo.top}px`, left: `${itemCaindo.left}px` }}
            >
              {itemCaindo.icon}
            </div>
          )}
          {fimDeJogo && (
            <div className="game-over-message">
              <p>FIM DE JOGO!</p>
              <p>Pontuação Final: {pontuacao}</p> 
              <button onClick={reiniciarJogo} className="restart-button">Jogar Novamente</button>
            </div>
          )}
        </div>
      </div>
      <div className="trash-bins-container">
        <div className="bin-wrapper" onClick={() => aoClicarNaLixeira('metal')}>
          <div className="bin bin-metal">
            <FaTrashAlt size={50} />
          </div>
        </div>
        <div className="bin-wrapper" onClick={() => aoClicarNaLixeira('paper')}>
          <div className="bin bin-paper">
            <FaTrashAlt size={50} />
          </div>
        </div>
        <div className="bin-wrapper" onClick={() => aoClicarNaLixeira('plastic')}>
          <div className="bin bin-plastic">
            <FaTrashAlt size={50} />
          </div>
        </div>
        <div className="bin-wrapper" onClick={() => aoClicarNaLixeira('glass')}>
          <div className="bin bin-glass">
            <FaTrashAlt size={50} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayGame;