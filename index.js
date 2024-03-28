const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
connectDb();

app.use("/api/auth",require("./routes/authRoutes"));
app.use("/api/user",require("./routes/userRoutes"));
app.use("/api/product",require("./routes/productRoutes"));

app.listen(process.env.PORT,()=>{
    console.log("Server is running", process.env.PORT);
})