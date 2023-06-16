'use strict';
import { Router } from "express";

const internalServerErrorRoutes = Router();

internalServerErrorRoutes.use((err, req, resp, next) => {
    const statusCode = err.message || "500";
    resp.status(statusCode).send({
      status: err.message,
      message: err.message == "404" ? "Resource Not Found!" : "Internal Server Error",
    });
})

export default internalServerErrorRoutes;