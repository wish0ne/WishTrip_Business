import Router from "koa-router";
import geofence from "./geofence/index.js";

const api = new Router();

api.use("/geofence", geofence.routes());

export default api;
