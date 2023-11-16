import express from "express";
import  config  from "./config";

const app = express();
const {port} = config;

//settings
app.set('port', port || 5000)

export default app; 