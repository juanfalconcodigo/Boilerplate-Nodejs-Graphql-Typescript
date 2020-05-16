import { IResolvers } from "apollo-server-express";
import { SP_USER_CREATE } from "../environments/environment";

const mutation:IResolvers ={
    Mutation:{
        async createUser(_:void,{user},{connect}):Promise<any>{
            const {name,email,password}=user;
            try {
                const connection = await connect();
                const users = await connection.query(SP_USER_CREATE,[name,email,password]);
                return {
                    status:true,
                    message:`Registro exitoso del usuario ${name}`
                }
                
            } catch (error) {
                return {
                    status:false,
                    message:`Hubo un error vuelve a intentarlo`
                }
            }
        }
    }
}

export default mutation;