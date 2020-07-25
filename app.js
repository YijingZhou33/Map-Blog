const express = require('express');

const path = require('path');

const app = express();

const bodyParser = require('body-parser');

const dateFormat = require('dateformat');

const morgan = require('morgan');

const config = require('config');

const template = require('art-template');

const session = require('express-session');

// parse POST requests and create the req.body object
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'secret key',
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}));

require('./model/connect');

app.engine('art', require('express-art-template'));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'art');

template.defaults.imports.dateFormat = dateFormat;

app.use(express.static(path.join(__dirname, 'public')));

console.log(config.get('title'));

if (process.env.NODE_ENV == 'development') {
    console.log('Development environment...');
    app.use(morgan('dev'));
} else {
    console.log('Production environment...');
}

const home = require('./route/home');
const admin = require('./route/admin');

app.use('/admin', require('./middleware/loginGuard'));

app.use('/home', home);
app.use('/admin', admin);

app.use((err, req, res, next) => {
    const result = JSON.parse(err);
    let params = [];
    for (let attr in result) {
        if (attr != 'path') {
            params.push(attr + '=' + result[attr]);
        }
    }
    return res.redirect(`${result.path}?${params.join('&')}`);
});

// set port to listen for request
app.listen(3000, () => {
    console.log('Server is listening to port 3000...');
});