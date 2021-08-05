const router = require('express').Router();

router.post('/', (req, res, next) => {
    console.log(req.body);
    res.json({ bodyLogin: req.body })
})

module.exports = router;