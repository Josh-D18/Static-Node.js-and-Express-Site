const express = require('express');
const port = 3000;
const router = require('./routes/routes');
const app = express();


// Middleware

app.set('view engine', 'pug');
app.use('/static', express.static('public/'));
app.use(router)

app.listen(port, () => {
    console.log("Port is running")
})