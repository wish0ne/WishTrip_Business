import Router from "koa-router";
import geofence from "./geofence/index.js";
import store from "./store/index.js";

const api = new Router();

api.use("/geofence", geofence.routes());
api.use("/store", store.routes());

export default api;
