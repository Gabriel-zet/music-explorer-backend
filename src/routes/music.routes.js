const express = require('express');  
const router = express.Router();  
const { searchMusic } = require('../controllers/music.controller');  

router.get('/search', searchMusic);  

module.exports = router;  
