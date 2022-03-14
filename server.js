import express from "express";
import mongoose from "mongoose"
import configViewEngine from "./src/configs/viewEngine";
import initWebRoute from './src/routes/web'
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// router
initWebRoute(app)
// config view engine
configViewEngine(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
const URI = process.env.URI
mongoose.connect(URI, {

    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to mongodb")
})