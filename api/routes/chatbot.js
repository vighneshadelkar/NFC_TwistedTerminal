const express = require('express');
const Chatbot = express.Router();
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: "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"
});

Chatbot.post("/", async (request, response) => {
    try {
        const { chat } = request.body;
        console.log(chat)

        if (!chat) {
            throw new Error('Missing chat message');
        }

        const result = await openai.chat.completions.create({
            model: "text-davinci-003",
            messages: [{ "role": "user", "content": chat }],
        });

        response.json({
            output: result.data.choices[0].message.content,
        });


    } catch (error) {
        if (error instanceof OpenAI.APIError) {
            console.error(error.status);  // e.g. 401
            console.error(error.message); // e.g. The authentication token you passed was invalid...
            console.error(error.code);  // e.g. 'invalid_api_key'
            console.error(error.type);  // e.g. 'invalid_request_error'
        } else {
            // Non-API error
            console.log(error);
        }
    }
});

module.exports = Chatbot;
