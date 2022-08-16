import { Request, Response } from 'express'
const ProductModel = require("../../../../Products.json")


export default class ProductFetchAllontroller {
  public fetchAll = async (req: Request, res: Response) => {
    try {
      return res.status(200).send({
        message: 'Product fetched successfully!',
        success: true,
        list: ProductModel.products ? ProductModel.products: []
      })
    } catch (error) {
      return res.status(500).send(JSON.stringify(error))
    }
  };
}
