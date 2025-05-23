# Jogo Coleta Seletiva

Bem-vindo ao Jogo Coleta Seletiva! Um jogo divertido e educativo onde você aprende a separar corretamente os materiais recicláveis.

## Sobre o Jogo

O objetivo do jogo é clicar na lixeira correta (Metal, Papel, Plástico ou Vidro) para cada tipo de lixo que cai na tela. Quanto mais acertos, mais pontos você faz!

Este projeto foi desenvolvido utilizando React e Vite.

## Como Jogar

1.  Clone este repositório.
2.  Navegue até o diretório `coletalixo`.
3.  Instale as dependências:
    ```sh
    npm install
    ```
4.  Inicie o servidor de desenvolvimento:
    ```sh
    npm run dev
    ```
5.  Abra o navegador e acesse `http://localhost:5173` (ou a porta indicada no terminal).
6.  Clique em "Iniciar" para começar a jogar!

## Scripts Disponíveis

No diretório do projeto `coletalixo`, você pode executar:

### `npm run dev`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:5173](http://localhost:5173) (a porta pode variar) para visualizá-lo em seu navegador.

A página será recarregada quando você fizer alterações.\
Você também verá quaisquer erros de lint no console.

### `npm run build`

Constrói o aplicativo para produção na pasta `dist`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem hashes.\
Seu aplicativo está pronto para ser implantado!

### `npm run lint`

Executa o linter ESLint para verificar problemas de estilo e erros no código.

### `npm run preview`

Inicia um servidor local para visualizar a compilação de produção feita pelo `npm run build`.

## Estrutura do Projeto

```
coletalixo/
├── public/             # Arquivos estáticos (imagens, fontes)
├── src/                # Código fonte da aplicação
│   ├── components/     # Componentes React reutilizáveis
│   ├── pages/          # Componentes de página (Home, Jogo)
│   ├── main.jsx        # Ponto de entrada principal da aplicação React
│   └── ...
├── .gitignore          # Arquivos e pastas ignorados pelo Git
├── Dockerfile          # Configuração para containerização com Docker
├── eslint.config.js    # Configuração do ESLint
├── index.html          # Template HTML principal
├── nginx.conf          # Configuração do Nginx para o Docker
├── package.json        # Metadados do projeto e dependências
├── README.md           # Este arquivo
└── vite.config.js      # Configuração do Vite
```

## Tecnologias Utilizadas

*   React
*   Vite
*   React Router DOM
*   React Icons
*   ESLint
*   Docker
*   Nginx

---

Este template fornece uma configuração mínima para fazer o React funcionar no Vite com HMR e algumas regras ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) usa [Babel](https://babeljs.io/) para Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh
