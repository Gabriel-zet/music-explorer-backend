const axios = require('axios');

const searchMusic = async (req, res) => {
    const { query } = req.query;
    if(!query) return res.status(400).json({error: 'Query é requisitada!'});

    try{
        const response = await axios.get(`https://api.deezer.com/search?q=${query}`)
        return res.json(response.data);
    }catch(err){
        return res.status(500).json({err: 'Falha ao encontrar musica'})
    }
};

module.exports = { searchMusic }