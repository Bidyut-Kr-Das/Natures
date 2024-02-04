import express from "express";
import tourRouter from "#routes/tours.routes.js";

const app = express();

//middleware
app.use(express.json());

//routing
app.use(`/api/v1/tours`, tourRouter);

export default app;
