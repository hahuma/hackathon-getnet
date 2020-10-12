const jwt = require('jsonwebtoken')

exports.createToken = function(payload, expiresIn) {
    return jwt.sign(payload, process.env.SECRET, {
        expiresIn: expiresIn
    })
}

exports.verifyToken = function(req, res, next) {
    const token = req.headers.authorization
    const [, realToken] = token.split(' ')

    jwt.verify(realToken, process.env.SECRET, (err, decoded) => {
        if (err) return res.status(401).send({err: 'Token invalido'})

        req.userId = decoded.id
        next()
    })
}