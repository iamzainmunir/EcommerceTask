import express from 'express'
import bodyParser from 'body-parser'
import AppRoute from './modules/modules.routes'


class App {
  public app: express.Application;
  public routes: AppRoute = new AppRoute();

  constructor () {
    this.app = express()
    this.config();
    this.routes.initializeRoutes(this.app)
  }

  private config (): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
  }
}
export default new App().app
