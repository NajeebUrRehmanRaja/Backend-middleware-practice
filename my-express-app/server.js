import { config } from "./src/config/env.config.js";
import app from "./src/app.js";

const startServer = () => {
  const port = config.port || 3000;

  app.listen(port, ()=>{
    console.log(`Listening on Port: ${port}`);
  })
};

startServer();