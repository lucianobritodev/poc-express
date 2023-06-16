'use strict';
import { Router } from "express";

const notFoundErrorRoutes = Router();

notFoundErrorRoutes.use((req, resp, next) => next(new Error("404")))

export default notFoundErrorRoutes;