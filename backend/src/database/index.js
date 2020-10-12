const knex = require('knex')
const path = require('path')

const connection  = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'petterson',
        password: '123456',
        database: 'assinei_db'
    },
    migrations: {
        directory: path.resolve(__dirname, 'migrations')
    }
})

module.exports = connection