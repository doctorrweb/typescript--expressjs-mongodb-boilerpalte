//lib/routes/test_routes.ts
import { Router } from 'express'
import testRouter from './test'
import mismatchRouter from './mismatch'



class AppRouter {

   public router: Router

   constructor() {
       this.router = Router()
       this.config()
   }

   private config(): void {
   
      //
      this.router.use(testRouter)
      this.router.use(mismatchRouter)
      
   }

}

// const appRouter = new AppRouter()
const appRouter = new AppRouter().router

export default appRouter