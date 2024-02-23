const express = require('express');
const Chatbot = express.Router();
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

Chatbot.post("/", async (request, response) => {
    try {
        const { chat } = request.body;
        console.log(chat)

        if (!chat) {
            throw new Error('Missing chat message');
        }

        const result = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ "role": "user", "content": chat }],
            max_tokens:100
        });
        console.log(result.choices[0].message.content)
        response.json({
            reply: result.choices[0].message.content,
        });


    } catch (error) {
        if (error instanceof OpenAI.APIError) {
            response.status(500).json({err:error})
            console.error(error.status);  
            console.error(error.message); 
            console.error(error.code);  
            console.error(error.type); 
        } else {
            console.log(error);
        }
    }
});

module.exports = Chatbot;
