import express from "express";
import globalErrorHandler from "./middlewares/errorHandler.middleware.js"

const app = express();

// Routes
app.get("/", (req, res, next)=>{
    res.json({ msg: "Welcome to the Website! Backend Practice."});
})

// middleware use here:
app.use(globalErrorHandler)
export default app;