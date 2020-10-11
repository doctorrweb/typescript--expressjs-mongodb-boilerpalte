//lib/routes/test_routes.ts
import { Router, Request, Response } from 'express'


class MismatchRoutes {

   public router: Router

   constructor() {
       this.router = Router()
       this.config()
   }

   private config(): void {
   
      //
      this.router.route('*')
        .get((req: Request, res: Response) => {
         res.status(404).json({error: true, message: "Url not found !"})
      })
      
   }
}

const mismatchRoute = new MismatchRoutes().router

export default mismatchRoute