import express from "express";
import cors from "cors";

import limitRequests from "./middlewares/limitRequests.js";
import router from "./routes/route.js";
import __dirname from "../__dirname.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.options("*", (req, res) => {
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).send();
});

app.use("/api", limitRequests, router);

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

export default app;
