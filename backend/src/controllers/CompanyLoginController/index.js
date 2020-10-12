const knex = require('../../database/index')
const { createToken } = require('../../config/JWTultils')

class CompanyLoginController {
    async create(req, res) {
        const { email, password } = req.body;

        const company = await knex('companies').where('email', email).select('*').first()

        if(company.password !== password) {
            return res.status(401).send({error: "Erro no login"})
        }
        return res.json({
            company,
            token: createToken(company, '15min'),
            isCompany: true
        })
    }
}

module.exports = new CompanyLoginController()