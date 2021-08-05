const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.send('bueeeenas soy el index, ignorame')
})

router.use('/test', require('./routes/test'));

module.exports = router
