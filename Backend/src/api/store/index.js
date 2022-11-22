import Router from "koa-router";
import { readMainNames, readMiddleNames } from "./store.ctrl.js";

const store = new Router();

store.get("/category/main", readMainNames);

store.get("/category/middle/:code", readMiddleNames); //params: main_code, return : main_code에 해당하는 {middle_code, middle_name}

export default store;
