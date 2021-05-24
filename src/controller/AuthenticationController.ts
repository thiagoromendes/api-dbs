import { Request, Response } from "express";
import { CreateAuthService } from "../service/CreateAuthService";

class AuthenticationController{

    async create(request:Request, response:Response){

        const credentialsBody = request.body

        const createAuth = new CreateAuthService();

        const token = await createAuth.execute(credentialsBody);

        return response.json(token);
    }
}

export {AuthenticationController}