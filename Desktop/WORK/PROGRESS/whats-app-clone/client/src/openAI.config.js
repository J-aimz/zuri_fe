const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    Temperature: 0.9,
    response_length: 65,
    Top_P: 1,
    max_tokens: 7,
});


/*
import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

response = openai.Completion.create(
    model = "text-davinci-003",
    prompt = "",
    temperature = 0.7,
    max_tokens = 64,
    top_p = 1,
    frequency_penalty = 0.45,
    presence_penalty = 0,
    stop = ["\"\"\""]
)