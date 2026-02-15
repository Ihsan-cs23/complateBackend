const express = require('express');


const app = express();

app.get("/" , (req,res)=>{
    res.send("Hello World!, This is the home page");
})

app.get("/about", (req,res)=>{
    res.send("This is the about page");
})


app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});