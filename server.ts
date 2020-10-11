import app from './lib/config/app'
import * as dotenv from 'dotenv'

dotenv.config()

const { PORT } = process.env

app.listen(PORT, () => {
   console.log('Express server listening on port ' + PORT)
})