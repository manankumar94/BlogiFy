import express from "express";
import cors from "cors";
import connectToMongo from "./config/db.js";
import router from "./routes/blog.js";
import dotenv from "dotenv"; 

const app = express();
dotenv.config(); 


const PORT = process.env.PORT || 9000; 

connectToMongo();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public/upload"));

// For testing purpose only
app.get("/", (req, res) => {
    res.status(200).send("For testing Purpose Only");
});

// API Routes
app.use("/api", router);

app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server is Running on PORT ${PORT}`);
});
