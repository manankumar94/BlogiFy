import express from "express";
import cors from "cors";
import connectToMongo from "./config/db.js";
import router from "./routes/blog.js";

const app= express();

const PORT=9000;

connectToMongo();

// middlewares
app.use(cors());
app.use(express.json());

app.use(express.static("public/upload"))
// for testing purpose only
app.get("/",(req, res)=>{
    res
     .status(200)
     .send("For testing Purpose Only");
})

// API Routes
app.use("/api", router);

app.listen(PORT, (err)=>{
    if(err) console.log(err);
    else console.log(`Server is Running on PORT ${PORT}`);
})