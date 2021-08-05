const router = require('express').Router();
const validatetoken = require('./validatetoken')
router.get('/', validatetoken, (req, res, next) => {
    res.json({ message: 'profile' })
})

module.exports = router;