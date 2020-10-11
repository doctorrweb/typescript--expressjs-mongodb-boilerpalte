//lib/routes/test_routes.ts
import { Router, Request, Response } from 'express'


class TestRoutes {

    

   public router: Router

   constructor() {
       this.router = Router()
       this.config()
   }

   private config(): void {
   
      //
      this.router.route('/test')
        .get((req: Request, res: Response) => {
         res.status(200).json({message: "Get request successfully"})
      })
      
   }
}

const testRoute = new TestRoutes().router

export default testRoute