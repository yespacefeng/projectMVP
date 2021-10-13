const models = require('../models');

module.exports = {
  get: function(req, res) {
    models.members.getUser(req.query.id)
    .then(data => {
      let result = {
        id: data[0].rows[0].id,
        firstName: data[0].rows[0].firstname,
        lastName: data[0].rows[0].lastname,
        address: data[0].rows[0].address,
        city: data[0].rows[0].city,
        state: data[0].rows[0].state,
        zip_code: data[0].rows[0].zip_code,
        savings: {
          account_number: data[1].rows[0].account_number,
          balance: data[1].rows[0].balance
        },
        checking: {
          acount_number: data[2].rows[0].account_number,
          balance: data[2].rows[0].balance
        },
        transactions: data[3].rows
      }
      res.status(200).send(result);
    })
    .catch(error => {
      console.log(error);
      res.status(404).end();
    })
  }
}