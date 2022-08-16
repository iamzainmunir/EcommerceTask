import { ProductRoutes } from './Products/product.routes'


export default class Routes {
  public initializeRoutes = (app: any) => {
    const productRoutes = new ProductRoutes();
    productRoutes.initialize(app, this.BASEURL)
  };

  private BASEURL: string = '/api';
}
