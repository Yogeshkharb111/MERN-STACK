// const express = require("express")
// const app = express();

// app.get("/", (req, res) => {
//     res.json({
//         isSucess: true,
//         message: "Server is Running...",
//         data: {},
//     })
// })

// app.listen(2900, () => {
//     console.log("-------Server Started")
// })

// nodemon app.js

require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req,res) => { 
    res.send("yogeshdotcom")
})
app.get("/login", (req,res) => {
    res.send("<h1>Please login to login slash</h1>")
})
app.get("/youtube", (req, res) => { 
    res.send("<h2>please login to Youtube page</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});