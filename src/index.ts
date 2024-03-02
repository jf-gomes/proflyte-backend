import express from 'express'
import connectDb from './database/db'
import routes from './routes'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

connectDb()
    .then(() => {
        app.listen(3000, () => console.log('Sever running on http://localhost:3000'))
    })
    .catch((err: object) => console.log(err))