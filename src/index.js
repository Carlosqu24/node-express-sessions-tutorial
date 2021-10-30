const express = require('express');
const app = express();

const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');

// SETTINGS
app.set('port', process.env.PORT || 9000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
      saveUninitialized: false,
      resave: false,
      secret: 'mySecretKey'
}));
app.use(flash());

//GLOBAL VARIABLES
app.use((req, res, next) => {
      app.locals.message = req.flash('success');

      next();
})


// ROUTES
app.use(require('./routes/index.routes'))

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')))

// RUN SERVER
app.listen(app.get('port'), () => {
      console.log(`http://localhost:${app.get('port')}`)
});