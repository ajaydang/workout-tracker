const express = require('express');
const app = express();
const cors = require('cors');
const routers = require('./routes/api.routes');

//middleware - any time you're gonna make middle ware we have to use .use();
app.use(cors());
app.use(express.json()); // allowing us to give us access to request that body and we can get json data.

// routes for application
app.use('/api', routers);

app.listen(5000, () => {
    console.log('server has started on port 5000');
});
