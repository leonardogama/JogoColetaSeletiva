import { useState, useEffect } from "react";

function IconeIfecto() {
  const [imagemItem, setImagemItem] = useState(null);
  const [posicao, setPosicao] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const numeroDeItems = 4;
    const randomNumber = Math.floor(Math.random() * numeroDeItems) + 1;
    const randomImage = `imagens/items-infecto/${randomNumber}.png`;

    const randomTop = 0;
    const randomLeft = Math.floor(Math.random() * 10);

    setImagemItem(randomImage);
    setPosicao({ top: randomTop, left: randomLeft });
  }, []);

  return (
    <div>
      {imagemItem && (
        <img
          src={imagemItem}
          alt="Imagem do item infectante"
          style={{
            position: "absolute",
            top: `${posicao.top}px`,
            left: `${posicao.left}px`,
            width: "50px",
            height: "50px",
          }}
        />
      )}
    </div>
  );
}

export default IconeIfecto;
