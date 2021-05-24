import api from "../api/productApi"

class GetProductsService{
    public async execute(){

        let product = {}


        await api.get('/')
            .then(response => product = response.data)
            .catch(err => {
                return {
                    error: err
                }
            })
        
        return product
    }
}

export {GetProductsService}