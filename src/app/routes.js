'use strict';
import { Router } from "express";
import server from "../../server.config.js";
import loginRoutes from "./routes/login.routes.js"
import userRoutes from "./routes/user.routes.js"
import agendaRoutes from "./routes/agenda.routes.js"
import notFoundErrorRoutes from "./routes/not-found-error.routes.js";
import internalServerErrorRoutes from "./routes/internal-server-error.routes.js";

const routes = Router();
const uri = server.prefix;

// registro de routas
routes.use(uri, loginRoutes);
routes.use(uri, userRoutes);
routes.use(uri, agendaRoutes);
routes.get('/', (req, resp, next) => {
    resp.redirect(`${uri}/login`)
});


// meddlewares de erro
routes.use("*", notFoundErrorRoutes);
routes.use(internalServerErrorRoutes);

export default routes;