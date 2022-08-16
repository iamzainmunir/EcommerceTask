import { Request, Response } from 'express'
const fs = require('fs');

const ProductModel = require("../../../../Products.json")

export default class ProductCreateController {
  public create = async (req: Request, res: Response) => {
    try {
      let product = req.body;

      if(!ProductModel.products){
        product.id = 1
        ProductModel.products = [product];
      }else{
        let sortProducts = ProductModel.products.sort((a: any,b: any) => (b.id > a.id) ? 1 : ((a.id > b.id) ? -1 : 0))
        product.id = (sortProducts[0] && sortProducts[0].id) ? sortProducts[0].id +1 : 1;
        ProductModel.products.push(product);
      }
      
      let ProductsListJson = JSON.stringify(ProductModel)

      fs.writeFile("Products.json", ProductsListJson, { encoding: 'utf8', flag: 'w' }, function (err: any) {
        if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
        }
        console.log("JSON file has been saved.");
      });

      return res.status(200).send({
        message: 'Product created successfully!',
        success: true
      })
    } catch (error) {
      return res.status(500).send(JSON.stringify(error))
    }
  };
}
