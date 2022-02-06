//customizable server in next docs:

const express = require("express");
const app = express();
const server = require("http").Server(app);
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
require("dotenv").config({ path: "./config.env" });
const connectDb = require("./utilsserver/connectDB");
connectDb();
app.use(express.json());
const PORT = process.env.PORT || 3000;

nextApp.prepare().then(() => {
  //all pages inside nextJS is SSR (server side rendered). app.all is necessary
  app.all("*", (req, res) => handle(req, res));

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`express server running on port ${PORT}`);
  });
});
