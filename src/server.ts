import "reflect-metadata"
import express from 'express'
import './database/data-source'
import mainRouter from "./routes/mainRouter"
import cors from 'cors';

const app = express()
const PORT = process.env.GYMHIT_PORT

app.use(express.json())
app.use(cors());
app.use(mainRouter)

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})