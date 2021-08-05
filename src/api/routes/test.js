const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.get('/', (req, res, next) => {
    res.json({ message: 'testeadisimo padre' })
});

router.get('/:query', (req, res, next) => {
    res.json({ message: req.params })
})

router.post('/', (req, res, next) => {
    console.log(req.body)
    res.json({ body: req.body })
})
module.exports = router;