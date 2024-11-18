import user from "../model/user.model";
import { signUpValidator } from "../validator/auth.validator";

export const register = async(req, res) => {
    const registerValidator = signUpValidator.safeParse(req.body)

    if(registerValidator!= success){
        return res.status(400)
    }

    try {
        
    } catch (error) {
        
    }
}