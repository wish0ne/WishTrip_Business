import Router from "koa-router";
import { readMainNames } from "./store.ctrl.js";

const store = new Router();

store.get("/category/main", readMainNames);

export default store;
