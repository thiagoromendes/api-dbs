import api from "../api/shoppingCartApi"

interface ProductProps{
    productId: string;
    price: number;
    quantity: number;
}

class AddProductCartService{
    public async execute(id:string,{productId,price,quantity}:ProductProps){

        let shoppingCart = {}

        await api.put(`/addproduct/${id}`,{productId,price,quantity})
            .then(response => shoppingCart = response.data)
            .catch(err => {
                return {
                    error: err
                }
            })

        return shoppingCart;
    }
}

export {AddProductCartService}