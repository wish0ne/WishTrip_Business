import Router from "koa-router";
import store from "./store/index.js";

const api = new Router();

api.use("/store", store.routes());

export default api;
