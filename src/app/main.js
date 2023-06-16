'use strict';
import env from "dotenv";
import express, { json } from "express";
import cors from "cors";
import routes from "./routes.js";
import server from "../../server.config.js";

env.config();

const app = express();
const url = `${server.host}:${server.port}`;

app.use(json());
app.use(cors());
app.use(routes);

app.listen(server.port, () => {
    console.log(`Server is running at ${url} ...`);
})