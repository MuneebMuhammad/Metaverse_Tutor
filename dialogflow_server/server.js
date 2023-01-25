// require("dotenv").config();

const express = require("express")
const dialogflow = require("@google-cloud/dialogflow")
// const { v4 } = require("uuid")
// const Path = require("path")
const bodyParser = require('body-parser')
// const dotenv =  require("dotenv")
const cors =  require("cors")
require('dotenv').config({path: '.env'});
// const Routes = require("./routes")

// dotenv.config();
const sessionClient = new dialogflow.SessionsClient();
const PROJECT_ID = process.env.PROJECT_ID
const sessionPath = sessionClient.projectAgentSessionPath(
    PROJECT_ID, 123456
  );
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.post("/text-input", async (req, res) => {
    const {message} = req.body;
    console.log("message is: ", message)
    const request = {
        session: sessionPath,
        queryInput: {
          text: {
            text: message,
            languageCode: "en",
          },
        },
      };

    const responses = await sessionClient.detectIntent(request)
    res.json(responses[0].queryResult.fulfillmentMessages[0].text.text[0])
  });

app.listen(PORT, () => console.log(`🔥  server running on port ${PORT}`));
