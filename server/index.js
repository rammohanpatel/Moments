import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import posts from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://mram41614:MiJFuErqcF1c0YVC@cluster0.bovx4k0.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

app.use(posts)

// connecting to the MongoDB
mongoose.connect(CONNECTION_URL,{useNewUrlparser: true, useUnifiedTopology:true})
 .then(() => app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
 .catch((err)=>console.log(err.message));

