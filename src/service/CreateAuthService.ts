import api from "../api/authenticationApi"

interface CredentialsProps {
    user:string;
    password:string
}

class CreateAuthService{
    public async execute({user,password}:CredentialsProps){

        let token;

        await api.post('/',{user,password})
            .then(response => token = response.data)
            .catch(err => {
                return {
                    error: err
                }
            })
        
        return token;
    }
}

export {CreateAuthService}