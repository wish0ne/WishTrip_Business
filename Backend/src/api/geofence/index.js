import Router from "koa-router";
import { create, read } from "./geofence.ctrl.js";

const geofence = new Router();

geofence.get("/", read);
geofence.get("/:id", read);
geofence.post("/", create);

export default geofence;
