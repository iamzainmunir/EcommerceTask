import { Request, Response } from 'express'

export default class ProductFetchController {
  public fetchById = async (req: Request, res: Response) => {
    try {
      return res.status(200).send({
        message: 'Product fetched successfully!',
        success: true
      })
    } catch (error) {
      return res.status(500).send(JSON.stringify(error))
    }
  };
}