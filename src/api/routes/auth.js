const router = require('express').Router();
const User = require('../../models/User');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.json({ error: true, message: "Usuario no registrado" });
    }
    const validPassword = user.comparePassword(password);
    if (!validPassword) {
        return res.status(400).json({ error: true, message: "Contraseña invalida" });
    }
    const token = jwt.sign({
        id: user._id,

    }, process.env.SECRET)
    res.header('auth-token', token)
        .json({ error: null, id: user._id });
})

router.post('/register', async (req, res, next) => {
    const { email, password } = req.body;
    const uniqueEmail = await User.findOne({ email: email });
    if (uniqueEmail) return res.json({
        error: true,
        message: 'Email ya registrado'
    })
    try {
        user = new User();
        user.email = email;
        user.password = user.encryptPassword(password);
        await user.save();
        res.status(200).send(user);
    }

    catch (e) {
        console.log(e);
        res.status(400).json({ error: true, e });
    }

})

module.exports = router;