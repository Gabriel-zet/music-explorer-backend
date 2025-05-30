
# 🎧 Music Explorer - Backend API

API desenvolvida em **Node.js + Express**, que faz integração com a API pública do **Deezer** para permitir buscas de músicas, artistas e faixas específicas.

Este backend serve como base para um projeto fullstack, oferecendo endpoints REST que permitem consumir dados do Deezer, e poderá futuramente se expandir para funcionalidades como playlists, favoritos, entre outras.

## 🚀 Funcionalidades

- 🔍 **Buscar músicas ou artistas**
- 🎯 **Buscar uma música específica por ID**
- 🛠️ Estrutura modularizada (Controller, Routes, Services)
- Integração externa via API pública do **Deezer**

## 🔗 Rotas da API

### 🔍 Buscar músicas/artistas

```
GET /api/music/search?query={termo}
```

**Descrição:**  
Busca músicas ou artistas com base no termo enviado.

**Exemplo:**  
`/api/music/search?query=eminem`

**Retorno:**  
- Lista de músicas correspondentes com informações como título, artista, link, etc.

### 🎯 Buscar uma música específica (por ID)

```
GET /api/music/unique/:id
```

**Descrição:**  
Retorna os detalhes de uma música específica através do seu ID.

**Exemplo:**  
`/api/music/unique/3135556`

**Retorno:**  
- Dados detalhados da faixa, incluindo título, duração, artista, link, capa, etc.

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- Axios
- CORS
- Nodemon 

## 🗂️ Organização do projeto

```
music-explorer-backend/
├── src/
│   ├── controllers/
│   │   ├── music.controller.js
│   │   └── uniqueMusic.controller.js
│   ├── routes/
│   │   └── music.routes.js
│   └── services/ (opcional)
├── app.js
├── server.js
├── package.json
└── README.md
```

## 🚀 Como rodar o projeto localmente

1. Clone este repositório:

```bash
git clone https://github.com/Gabriel-zet/music-explorer-backend.git
```

2. Acesse a pasta do projeto:

```bash
cd music-explorer-backend
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto:

```bash
nodemon server.js
```

(Ou `node server.js` para rodar sem nodemon)

5. Acesse a API:

```
http://localhost:5000/
```

## 📚 Referências da API

- [Deezer API Docs](https://developers.deezer.com/api)

## 💻 Autor

Feito por [Zet](https://github.com/Gabriel-zet) 

## Ongoing

