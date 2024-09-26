import express from "express";
const app= express();

const PORT=9000;

// for testing purpose only
app.get("/",(req, res)=>{
    res
     .status(200)
     .send("For testing Purpose Only");
})

app.listen(PORT, (err)=>{
    if(err) console.log(err);
    else console.log(`Server is Running on PORT ${PORT}`);
})