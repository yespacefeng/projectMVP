const express = require('express');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');

const port = process.env.PORT || 3000;

const app = express()
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(express.json());
app.use(morgan('dev'));

app.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/login' }))

app.listen(port, (err,something) => {
  console.log(`Server running on port ${port}`);
})