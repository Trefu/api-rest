//IMPORTACIONES
const express = require('express');
const morgan = require('morgan')
const app = express();
require('./database');

//CONFIGS
const port = process.env.PORT || 3000;


//MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

//RUTAS
app.use('/api', require('./src/api/api'));
app.use('/', (req, res) => {
    res.json({
        estado: true,
        message: 'boeenas'
    })
})
//ERROR HANDLER
app.use((req, res, _next) => {
    res.status(404);
    // TODO: 404 pagina
    // // respond with html page
    return res.send({ error: 'Not found' });
});


app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
