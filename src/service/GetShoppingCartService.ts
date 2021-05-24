import api from "../api/shoppingCartApi"

class GetShoppingCartService{
    public async execute(id:string){

        let shoppingCart = {};

        await api.get(`/${id}`)
            .then(response => shoppingCart = response.data)
            .catch(err => {
                return {
                    error: err
                }
            })
        
        return shoppingCart;
    }
}

export {GetShoppingCartService}