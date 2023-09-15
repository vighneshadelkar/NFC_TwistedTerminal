const express = require('express');
const Chatbot = express.Router();
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    organization: "org-0nmrFWw6wSm6xIJXSbx4FpTw",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

Chatbot.post("/", async (request, response) => {
    const { chats } = request.body;

    const result = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are a EbereGPT. You can help with graphic design tasks",
            },
            ...chats,
        ],
    });

    response.json({
        output: result.data.choices[0].message,
    });
});

module.exports = Chatbot;
