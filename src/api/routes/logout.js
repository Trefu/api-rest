const router = require('express').Router();

router.get('/', (res, req, next) => {
    res.json({ message: 'logout' })
})

module.exports = router;