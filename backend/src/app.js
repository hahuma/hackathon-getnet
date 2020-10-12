const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.send('Só o protótipo')
})
app.listen(3333) // só por enquanto