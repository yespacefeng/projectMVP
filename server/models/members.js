const db = require('../database');

module.exports = {
  getUser: function(id) {
    let queryString = 'SELECT * FROM members WHERE id = $1';
    return Promise.all([
      db.query('SELECT * FROM members WHERE id = $1', [id]),
      db.query('SELECT * FROM savings WHERE member_id = $1', [id]),
      db.query('SELECT * FROM checking WHERE member_id = $1', [id]),
      db.query('SELECT * FROM transactions WHERE member_id = $1 ORDER BY id DESC', [id])
    ])
  }
}