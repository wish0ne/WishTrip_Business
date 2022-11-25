import Router from "koa-router";
import { readGeofence } from "./geofence.ctrl.js";

const geofence = new Router();

geofence.get("/", readGeofence);

export default geofence;
