import "reflect-metadata"
import express from 'express'
import './database/data-source'

const app = express()
const PORT = process.env.TYPEORM_SERVERPORT

app.use(express.json())

app.use('/', (req, res) => {
    res.send('Tudo ok')
})

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})