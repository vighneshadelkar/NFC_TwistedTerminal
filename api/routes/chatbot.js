// Import necessary modules
const express = require('express');
const Chatbot=express.Router()
const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, 
});
const openai = new OpenAIApi(configuration);


async function sendTextToOpenAI(text) {
    try {
        const response = await openai.createCompletion({
            model: "davinci", 
            prompt: text,
        });
        return response.data.choices[0].text;
    } catch (error) {
        console.log(error.message);
        throw new Error('Error connecting to OpenAI.');
    }
}


Chatbot.post('/api/chatbot', async (req, res) => {
    try {
        const response = await sendTextToOpenAI(req.body.text);
        res.json({ reply: response });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err.message });
    }
});

module.exports=Chatbot;