import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.RESEND_API) {
  console.log("Provide RESEND_API in side the .env file");
}

const resend = new Resend(process.env.RESEND_API);

const sendEmail = async ({ sendTo, subject, html })=>{
    try{
            const { data, error } = await resend.emails.send({
              from: "Blinkeyit <onboarding@resend.dev>",
              to: 'shubhrajain211@gmail.com',
              subject: subject,
              html: html,
            });

            console.log("API Response:", { data, error });
    if (error) {
        return console.error({ error });
      }
      return data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

export default sendEmail


 

 
