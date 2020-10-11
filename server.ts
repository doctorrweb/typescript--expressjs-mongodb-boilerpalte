import app from './lib/config/app'
import * as dotenv from 'dotenv'

dotenv.config()

const { PORT, BASE_URL } = process.env

app.listen(PORT, () => {
   console.log(`The drweb ExpressJS MongoDB Boilerplate server is running on : ${BASE_URL}:${PORT}`)
})