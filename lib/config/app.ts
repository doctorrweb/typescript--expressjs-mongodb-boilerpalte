import * as express from "express"
import * as bodyParser from "body-parser"
import * as morgan from "morgan"
// import * as dotenv from 'dotenv'

import AppRouter from '../routes/index'


class App {

   public app: express.Application
   // private appRouter: AppRouter = new AppRouter().router

   constructor() {
      this.app = express()
      this.config()
   }

private config(): void {
   
      //
      this.app.use(morgan('tiny'))

      // support application/json type post data
      this.app.use(bodyParser.json({ type: '*/*', limit: '50mb' }))

      //support application/x-www-form-urlencoded post data
      this.app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))

      //
      this.app.use('/api', AppRouter)
   }
}

export default new App().app