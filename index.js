const express = require('express');
const app = express();
const cors = require('cors');
const routers = require('./routes/api.routes');
const CustomError = require('./utils/CustomError');

//middleware - any time you're gonna make middle ware we have to use .use();
app.use(cors());
app.use(express.json()); // allowing us to give us access to request that body and we can get json data.

// routes for application
app.use('/api', routers);

app.all('*', (req, res, next) => {
    const err = new CustomError(`Cant find ${req.originalUrl} on the server`, 404);

    next(err);
});

app.use((error, req, res, next) => {
    error.statusCode = error.StatusCode || 500;
    error.status = error.status || 'error ';
    res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
});

app.listen(5000, () => {
    console.log('server has started on port 5000');
});
