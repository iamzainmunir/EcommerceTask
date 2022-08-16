import express from 'express'
import bodyParser from 'body-parser'
import AppRoute from './modules/modules.routes'


class App {
  public app: express.Application;
  public routes: AppRoute = new AppRoute();

  constructor () {
    this.app = express()
    this.routes.initializeRoutes(this.app)
    this.config();
  }

  private config (): void {
    this.app.use(bodyParser.json())
    this.app.post("/", (req,res) => console.log(req.body))
    // this.app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
  }
}
export default new App().app
