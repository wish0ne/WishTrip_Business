import Router from "koa-router";
import {
  readMainCategory,
  readMiddleCategory,
  readSubCategory,
  readStores,
} from "./store.ctrl.js";

const store = new Router();

store.get("/category/main", readMainCategory);

store.get("/category/middle/:code", readMiddleCategory); //params: main_code, return : main_code에 해당하는 {middle_code, middle_name}

store.get("/category/sub/:code", readSubCategory);

store.get("/:code", readStores);

export default store;
