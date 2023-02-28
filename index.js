// An express server handling incoming requests and respond back with json object. It will use body parser and cors
const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const configuration = new Configuration({
    organization: "org-jGm44aPvqbvs1HL5kUz9zN4d",
    apiKey: "EnterYourAPIKey",
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
    const {message} = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `The assistant provides information about pre historic creatures that existed millions of years ago like dinosours
        ${message}`,
        max_tokens: 10,
        temperature: 0,
      });
      console.log(response.data);
      if(response.data)
      {
        if(response.data.choices)
        {
            res.json({
                message: response.data.choices[0].text
            })
        }
      }
});

app.listen(port, () => {
    console.log('Example app listening');
});
