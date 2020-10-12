const express = require('express')

const routes = express.Router()

// Rotas do cliente


// Rotas da Empresa
routes.get('/', () => {})
routes.post('/companies', () => {})
routes.post('/companies/:company/add-subscription', () => {})
routes.get('/companies/:company/clients', () => {})
routes.get('/', () => {})