const controllers = require('./controllers');
let router = require('express').Router();

router.get('/user', controllers.members.get);

module.exports = router;