import { z } from "zod"
import user from "../model/user.model"

 export const signUpValidator = z.object({
    firstName: z.string(),
    lastName: z.string(), 
    phoneNumber: z.number(),
    password: z.string().minLength(8, {message: `you password must be above 8 characters`}),
    email: z.string().email(),
    gender: z.string(),
    address: z.string()
}).required({message: 'all field are required '})

export const signInValidator = z.object({
       phoneNumber: z.number(),
       email: z.string().email(),
       password: z.string()
})


