const { Pool } = require('pg');
const pool = new Pool({
  database: 'hackersbank'
})

pool.connect()
  .then(() => {
    console.log('Connected to Postgres');
  })
  .catch(error => {
    console.log(error);
  })

module.exports = pool;