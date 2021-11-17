require("dotenv").config()
const express = require("express");
const app = express();
// while nodemon is running in the terminal, below 4 lines allow us to open our browser, go to localhost:5555, & our HTML page on line 7 will display
app.use(express.static("client"));
app.get("/", (req, res) => {
    res.sendFile("index.html");
});
// below PORT is provided by Heroku, which will not work on our local machine, so second one gets used when on my local machine
const port = process.env.PORT || process.env.SERVER_PORT;




app.listen(port, () => console.log(`Ya server do be running on port: ${port}`));

// when connecting this GitHub repo to Heroku, can connect in the Deploy section of the app. We can enable automatic deploys here (when changes are detected in GitHub repo), but not doing that now. At the bottom, need to deploy the changes manually.
// also in package.json, we added line 7 && in the root folder we created the Procfile file.