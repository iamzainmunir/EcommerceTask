import ProductCreateController from './controller/product.create.controller'
import ProductFetchController from './controller/product.fetch.controller'
import ProductFetchByIdController from './controller/product.fetch_by_id.controller'


export class ProductRoutes {
  public initialize (app: any, baseUrl: string): void {
    const productCreateController = new ProductCreateController()
    const productFetchController = new ProductFetchController()
    const productFetchByIdController = new ProductFetchByIdController()

    app
      .route(baseUrl + '/product')
      .post(productCreateController.create)
      .get(productFetchController.fetchAll)

    app
      .route(baseUrl + '/product/:id')
      .get(productFetchByIdController.fetchById)
  }
}
