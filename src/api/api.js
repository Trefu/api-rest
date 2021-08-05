const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.json({
        endpoints: [
            { api_auth_login: 'POST' },
            { api_logout: 'GET' },
            { api_auth_register: 'POST' },
            { api_profile: 'GET' }
        ]
    })
})

router.use('/test', require('./routes/test'));
router.use('/logout', require('./routes/logout'));
router.use('/profile', require('./routes/profile'));
router.use('/auth', require('./routes/auth'));


module.exports = router
