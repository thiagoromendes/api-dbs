import api from "../api/productApi"

interface ProductProps {
    productId: string;
    price: number
}

class CreateProductService{
    
    public async execute({productId,price}:ProductProps){

        await api.post('/', {productId, price})
            .then()
            .catch(err => {
                return {
                    error: err
                }
            })
        
        return {productId, price}
    }
}

export {CreateProductService}