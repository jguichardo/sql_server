import express from "express";
import config from "./config";

const app = express();
const { port } = config;

//settings
app.set("port", port);

export default app;
