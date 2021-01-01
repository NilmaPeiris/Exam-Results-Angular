const express = require('express');
const db = require('./db');
const gradeRoutes = require('./controllers/gradeController');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Request-Methods",
        "GET, POST, PUT"
    );
    next();
});
app.use('/marks', gradeRoutes);
app.listen(PORT , console.info(`Server started at ${PORT}`));
