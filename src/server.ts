import "reflect-metadata"
import express from 'express'
import './database/data-source'
import mainRouter from "./routes/mainRouter"

const app = express()
const PORT = process.env.GYMHIT_PORT

app.use(express.json())
app.use(mainRouter)

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})