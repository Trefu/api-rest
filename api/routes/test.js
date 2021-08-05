const router = require('express').Router();


router.get('/test', function (req, res, next) {
    res.json({ message: 'testeadisimo padre' })
});



module.exports = router;