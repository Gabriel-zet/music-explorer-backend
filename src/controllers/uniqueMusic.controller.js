const axios = require('axios');

const searchMusicById = async (req, res) => {
    const { id } = req.params;
    const parseId = parseInt(id)
    if(!id) return res.status(400).json({error: 'Id é requisitado!'});

    try{
        const response = await axios.get(`https://api.deezer.com/track/${parseId}`)
        // busca na api do deezer com o endpoint "track" e retorna os dados especificos para a música especifica do id
        return res.json(response.data);
    }catch(err){
        return res.status(500).json({err: 'Falha ao encontrar musica pelo id informado'})
    }
};

module.exports = { searchMusicById }