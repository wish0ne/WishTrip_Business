import dotenv from "dotenv";
import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";
import api from "./api/index.js";

dotenv.config();
const { PORT, MONGO_URI } = process.env;
const app = new Koa();
const router = new Router();

//라우터 설정
router.use("/api", api.routes());

app.use(bodyParser());

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log(e);
    throw e;
  });
