const express = require('express')
const { verifyToken } = require('./config/JWTultils')
const ClientLoginController = require('./controllers/ClientLoginController')
const CompanyLoginController = require('./controllers/CompanyLoginController')

const routes = express.Router()

routes.post('company/login', CompanyLoginController)
routes.post('client/login', ClientLoginController)
routes.post('/companies', verifyToken, () => {})
routes.post('/companies/:company_id/add-subscription', verifyToken, () => {})
routes.get('/companies/:company_id/finances', verifyToken, () => {})
routes.get('/companies/:company_id/clients', verifyToken, () => {})
