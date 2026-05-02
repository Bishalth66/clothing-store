import {z} from "zod";

export const signupSchema = z.object({
    full_name:z.string().min(4,"Name must be at least 4 characters"),
    email:z.string().email(),
    password:z.string().min(6,"Password must be atleast 6 characters"),
    confirm_password:z.string()
}).refine((data) => data.password === data.confirm_password , {
    message:"Passwords doesn't match",
    path:["confirm_password"]
});

export type SignupData = z.infer<typeof signupSchema>