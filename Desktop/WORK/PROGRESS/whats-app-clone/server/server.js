const { Configuration, OpenAIApi } = require("openai");

const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = 3080



const configuration = new Configuration({
    organization: "org-6AqPbP0J1mDugwuoFIhktgSm",
    apiKey: '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'
});
const openai = new OpenAIApi(configuration);

app.post('/', async (req, res) =>{

    const { message } = req.body

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ["\n"],
    });

})

app.listen(port, () => { console.log(`listing on port: ${port}`) })