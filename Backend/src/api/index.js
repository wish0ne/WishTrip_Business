import Router from "koa-router";
import store from "./store/index.js";
import geofence from "./geofences/index.js";

const api = new Router();

api.use("/store", store.routes());
api.use("/geofence", geofence.routes());

export default api;
