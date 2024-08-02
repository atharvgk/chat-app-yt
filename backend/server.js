import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.route.js";

const app = express();
const PORT=process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse incoming requests with JSON payloads(form req.body)
app.use(cookieParser());

app.use('/api/auth',authRoutes );
app.use('/api/messages',messageRoutes );

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server started on port ${PORT}`)
});