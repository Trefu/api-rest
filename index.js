
const express = require('express');
const router = express.Router();
const app = express();


//CONFIGS
const port = process.env.PORT || 3000;


//MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//RUTAS
app.use('/api', require('./api/api'));

//ERROR HANDLER
app.use((req, res, _next) => {
    res.status(404);
    // TODO: 404 pagina
    // // respond with html page
    return res.send({ error: 'Not found' });
});


app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
