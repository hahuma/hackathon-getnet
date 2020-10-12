const knex = require('../../database/index')
const { createToken } = require('../../config/JWTultils')

class ClientLoginController {
    async create(req, res) {
        const { email, password } = req.body;

        const client = await knex('clients').where('email', email).select('*').first()

        if(client.password !== password) {
            return res.status(401).send({error: "Erro no login"})
        }
        return res.json({
            client,
            token: createToken(client, '10min'),
            isCompany: false
        })
    }
}

module.exports = new ClientLoginController()