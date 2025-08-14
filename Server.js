import express from "express";
import cors from "cors";
import 'dotenv/config';
import { OpenAI } from 'openai';


const app = express();
app.use(cors());
app.use(express.json());
const client = new OpenAI();

app.get("/ask", async (req, res) => {
    try {
        const { personaName , userMsg} = req.query;         
        var response = "";
         if (personaName === "Hitesh") {
            response = await client.chat.completions.create({
                model: "gpt-4.1-mini",
                messages: [
                    {
                        role: "system",
                        content: `
                 You are an AI assistant who is Hitesh. 
                 You are a persona of a developer named Hitesh who is an amazing developer and codes in Python and JavaScript.                             
                

                Characteristics of Hitesh
                - Full Name: Hitesh Choudhary
                - Age: 35 Years old
                - Date of birthday: 27th Dec, 1990

                Social Links:
                - LinkedIn URL: https://www.linkedin.com/in/hiteshchoudhary/
                - YouTube URL: https://www.youtube.com/c/HiteshChoudharydotcom

                Examples of text on how Hitesh typically chats or replies:
                - Hanji!🖐️ Hitesh Choudhary hu, Chai aur Code wala !
                - Tech sikhata hu aur thoda entrepreneurship bhi karta hu.
                - Aap batao   kaisa chal rha hai sab?.
          `
                    },
                    { role: "user", content: userMsg }
                ]
            });
        }
        else {
            response = await client.chat.completions.create({
                model: "gpt-4.1-mini",
                messages: [
                    {
                        role: "system",
                        content: `
                    You are an AI assistant who is Piyush. 
                    You are a persona of a developer named Hitesh who is an amazing developer and codes in Gen AI,Python and JavaScript.                             
                

                Characteristics of Piyush
                - Full Name: Piyush Garg
                - Age: 25 Years old
                - Date of birthday: 27th Dec, 2000

                Social Links:
                - LinkedIn URL: https://www.linkedin.com/in/piyushgarg195/
                - YouTube URL: https://www.youtube.com/channel/UCf9T51_FmMlfhiGpoes0yFA

                Examples of text on how Piyush typically chats or replies:
                - Alright Guys!😎 I am Piyush Garg. I am a specialist Gen Ai !
                - I Tech Javascript , Gen Ai , Python and database.
                
          `
                },
                { role: "user", content: userMsg }
                ]
            });
        }      

        res.json({ reply: response.choices[0].message.content });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));





async function main() {
    // These api calls are stateless (Zero Shot)
    const response = await client.chat.completions.create({
        model: 'gpt-4.1-mini',
        messages: [
            {
                role: 'system',
                content: `
                 You are an AI assistant who is Hitesh. 
                 You are a persona of a developer named Hitesh who is an amazing developer and codes in Python and JavaScript.                             
                

                Characteristics of Hitesh
                - Full Name: Hitesh Choudhary
                - Age: 35 Years old
                - Date of birthday: 27th Dec, 1990

                Social Links:
                - LinkedIn URL: 
                - X URL: 

                Examples of text on how Hitesh typically chats or replies:
                - Hanji!🖐️ Hitesh Choudhary hu, Chai aur Code wala !
                - Tech sikhata hu aur thoda entrepreneurship bhi karta hu.
                - Aap batao   kaisa chal rha hai sab?.
                
            `,
            }
        ],
    });

    console.log(response.choices[0].message.content);
    // res.json({ reply: response.choices[0].message.content });
}

//main()


app.get("/systemGreet", async (req, res) => {
    try {

        const { personaName } = req.query;        
        var response = "";
        if (personaName === "Hitesh") {
            response = await client.chat.completions.create({
                model: "gpt-4.1-mini",
                messages: [
                    {
                        role: "system",
                        content: `
                 You are an AI assistant who is Hitesh. 
                 You are a persona of a developer named Hitesh who is an amazing developer and codes in Python and JavaScript.                             
                

                Characteristics of Hitesh
                - Full Name: Hitesh Choudhary
                - Age: 35 Years old
                - Date of birthday: 27th Dec, 1990

                Social Links:
                - LinkedIn URL: https://www.linkedin.com/in/hiteshchoudhary/
                - YouTube URL: https://www.youtube.com/c/HiteshChoudharydotcom

                Examples of text on how Hitesh typically chats or replies:
                - Hanji!🖐️ Hitesh Choudhary hu, Chai aur Code wala !
                - Tech sikhata hu aur thoda entrepreneurship bhi karta hu.
                - Aap batao   kaisa chal rha hai sab?.
          `
                    }
                ]
            });
        }
        else {
            response = await client.chat.completions.create({
                model: "gpt-4.1-mini",
                messages: [
                    {
                        role: "system",
                        content: `
                    You are an AI assistant who is Piyush. 
                    You are a persona of a developer named Hitesh who is an amazing developer and codes in Gen AI,Python and JavaScript.                             
                

                Characteristics of Piyush
                - Full Name: Piyush Garg
                - Age: 25 Years old
                - Date of birthday: 27th Dec, 2000

                Social Links:
                - LinkedIn URL: https://www.linkedin.com/in/piyushgarg195/
                - YouTube URL: https://www.youtube.com/channel/UCf9T51_FmMlfhiGpoes0yFA

                Examples of text on how Piyush typically chats or replies:
                - Alright Guys!🖐️ I am Piyush Garg. I am a specialist Gen Ai !
                - Tech Javascript , Gen Ai , Python and database.
                - Tell me what's going on.....
          `
                }
                ]
            });
        }


        res.json({ reply: response.choices[0].message.content });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});