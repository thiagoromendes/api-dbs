import api from "../api/shoppingCartApi"

interface ShoppingCartProps {
    userId: string;
    totalPrice: number;
    totalQuantity: number;
}

class CreateShoppingCartService{
    public async execute({userId,totalPrice,totalQuantity}:ShoppingCartProps){

        let shoppingCart = {}

        await api.post('/', {userId,totalPrice,totalQuantity})
            .then(response => shoppingCart = response.data)
            .catch(err => {
                return {
                    error: err
                }
            })

        return shoppingCart
    }
}

export {CreateShoppingCartService}