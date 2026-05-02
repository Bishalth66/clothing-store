import {betterAuth} from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { sendEmail } from "./sendEmail";
export const auth = betterAuth({
    baseURL:process.env.BETTER_AUTH_URL,
    emailAndPassword:{
        enabled:true,
        autoSignIn:false,
        requireEmailVerification:true,
    },
    emailVerification:{
        sendVerificationEmail: async({user,url}) =>{
            void sendEmail({
                to:user.email,
                subject:"Please verify your email",
                text:`Click on the link to verify ${url}`
            })
        },
         sendOnSignIn: true,
    },
     database:prismaAdapter(prisma,{
        provider:"postgresql"
    }),
});