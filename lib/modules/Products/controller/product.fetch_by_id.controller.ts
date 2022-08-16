import { Request, Response } from 'express'
const ProductModel = require("../../../../Products.json")

export default class ProductFetchController {
  public fetchById = async (req: Request, res: Response) => {
    try {
      let productList = ProductModel.products ? ProductModel.products: []

      let product = productList.find((product: any) => product.id.toString() === req.params.id)
      return res.status(200).send({
        message: 'Product fetched successfully!',
        success: true, 
        data: product
      })
    } catch (error) {
      return res.status(500).send(JSON.stringify(error))
    }
  };
}
