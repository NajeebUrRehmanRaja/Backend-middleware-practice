import express from "express";

const app = express();

// Routes
app.get("/", (req, res, next)=>{
    res.json({ msg: "Welcome to the Website! Backend Practice."});
})

// global error handling

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({ msg : "Server Error" , errorStack : config.env === 'development' ? err.Stack : ""})
})
export default app;