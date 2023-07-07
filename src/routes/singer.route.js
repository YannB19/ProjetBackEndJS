const router = require('express').Router();

const {
    getAllSingers,
    getSingerById,
    getSingerByName,
    createSinger,
    updateSingerById,
    deleteSingerById
} = require('../controllers/singer.controller');

router.get('/', getAllSingers);
router.get('/:id', getSingerById);
router.get('/filter/:nom', getSingerByName);

router.post('/', createSinger);

router.patch('/:id', updateSingerById);

router.delete('/:id', deleteSingerById);

module.exports = router;
