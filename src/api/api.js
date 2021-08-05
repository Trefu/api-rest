const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.json({
        endpoints: [
            { login: 'POST' },
            { logout: 'GET' },
            { register: 'POST' },
            { profile: 'GET' }
        ]
    })
})

router.use('/test', require('./routes/test'));
router.use('/login', require('./routes/login'));
router.use('/logout', require('./routes/logout'));
router.use('/register', require('./routes/register'));
router.use('/profile', require('./routes/profile'));


module.exports = router
