const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//import routes from route.js
const routes = require('./route')

const IS_PROD = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 3071;

// our main app
const app = express();

//all the midlewares
app.use(cors());
app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({ extendet: true }));

// routes
app.use("/api", routes)

//404 route handler

app.all("*", (_req, res) => {
  res.status({
    msg: "The route url you are searching for does not exist",
  });
});

//error handler

app.use((err, req, res, next) => {
  IS_PROD && console.error(err);
  res.status(500).send({
    msg: "There was some internal server error. please try again later",
  });
});

app.listen(PORT, () => {
  console.log("Server listening on http://localhost:" + PORT);
});

//npm install nodemon
//if you make some changes in the app, during developpement you will not need to retart it again and again...
