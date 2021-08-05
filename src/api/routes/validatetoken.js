const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json({
        error: true, message: 'acceso denegado'
    })
    try {
        const verified = jwt.verify(token, process.env.SECRET);
        req.user = verified;
        next()
    }
    catch (e) {
        res.status(400).json({ error: 'token invalido' })
    }
}

module.exports = verifyToken