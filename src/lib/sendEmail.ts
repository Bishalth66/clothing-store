import nodemailer from "nodemailer"

export const transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL_ID,
        pass:process.env.EMAIL_PASS
    }
});

export async function sendEmail({to, subject, text} : {to:string,subject:string, text:string}) {
  
    try{
        const mailSend = await transport.sendMail({
            from:process.env.EMAIL_ID,
            to:to,
            subject:subject,
            text:text
        });

        if(!mailSend) throw new Error("Email not send");

    }catch(error){
        console.error("Error occured while sending email : "+ error);
    }

     
}