const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./database');
const router = require('./routes.js');

const port = process.env.PORT || 3000;

const app = express()
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(express.json());
app.use(morgan('dev'));

app.use('/', router);

app.listen(port, (err,something) => {
  console.log(`Server running on port ${port}`);
})