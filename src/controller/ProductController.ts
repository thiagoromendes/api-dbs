import { Request, Response } from "express";
import { CreateProductService } from "../service/CreateProductService";
import { GetProductsService } from "../service/GetProductsService";

class ProductController{
    
    async create(request:Request, response:Response){
        
        const productBody = request.body;

        const createProduct = new CreateProductService()

        const product = await createProduct.execute(productBody);

        return response.json(product);
    }
    
    async show(request:Request, response:Response){

        const getProducts = new GetProductsService();

        const products = await getProducts.execute();

        return response.json(products);
    }

    

}

export {ProductController}