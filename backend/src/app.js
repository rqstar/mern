const express = require('express');
const cors = require('cors');
const passport=require('passport');
const session=require('express-session');

const app = express();

// initialization
app.set('port', process.env.PORT || 4000);
require('./config/passport');

// middlewares 
app.use(cors()); 
app.use(express.json());

app.use(session({
    secret:'mysecretapp',
    resave:true,
    saveUninitialized:true
}));//autenticar los datos de los usuarios temporalmente

app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/api/notes', require('./routes/notes'));
app.use('/api/register', require('./routes/register'));
app.use('/api/login', require('./routes/login'));

module.exports = app;