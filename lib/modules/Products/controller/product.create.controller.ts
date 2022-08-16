import { Request, Response } from 'express'
const fs = require('fs');

export default class ProductCreateController {
  public create = async (req: Request, res: Response) => {
    try {
console.log(req.body)
      // parse json
      var jsonObj = JSON.parse(req.body);
      console.log(jsonObj);

      // stringify JSON Object
      var jsonContent = JSON.stringify(jsonObj);
      console.log(jsonContent);

      fs.writeFile("productDB.json", jsonContent, 'utf8', function (err: any) {
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
