const express = require('express');
const port = 3000;
const router = require('./routes/routes');
const app = express();


// Middleware

app.set('view engine', 'pug');
app.use('/static', express.static('public/'));
app.use(router)



// 404 Error Handler
app.use(function(req, res, next) {
    const error = new Error();
    error.status = 404;
    error.message = "Sorry can't find that page!";
    if(res.status(404)){
        console.error(error.message, error.status)
        res.render('error404', { error })
    }
});


// Global Error Handler
app.use(function(err, req, res, next) {
    err.message = "Uh Oh looks like something went wrong on our end!";
    res.status(err.status || 500);
    res.render('errors', { err });
});


app.listen(port, () => {
    console.log("Port is running");
})