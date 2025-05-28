const express = require('express');  
const router = express.Router();  
const { searchMusic } = require('../controllers/music.controller');  
const { searchMusicById } = require('../controllers/uniqueMusic.controller');

router.get('/search', searchMusic);  
router.get('/unique/:id', searchMusicById)

module.exports = router;  
