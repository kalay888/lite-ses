const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {

    res.send(`
    <html>

    <head>
      <title>ZACK-MD PAIR CODE</title>
    </head>

    <body style="
    background:#111;
    color:white;
    font-family:sans-serif;
    text-align:center;
    padding-top:80px;
    ">

    <img src="https://files.catbox.moe/xd30uv.png" width="220"/>

    <h1>ZACK-MD PAIR CODE</h1>

    <p>PAIR CODE SERVER CONNECTED ✅</p>

    </body>
    </html>
    `)

});

app.listen(PORT, () => {
   console.log("Server Running");
});
