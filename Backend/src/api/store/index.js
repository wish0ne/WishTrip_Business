import Router from "koa-router";
import { create, read } from "./store.ctrl.js";

const store = new Router();

store.get("/:id", read);
store.post("/", create);

export default store;
