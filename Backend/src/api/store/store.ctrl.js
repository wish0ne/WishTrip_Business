import Store from "../../models/store.js";
import fs from "fs";

export const create = async (ctx) => {
  const csv = fs.readFileSync("store.xlsx", "utf-8");
};

export const read = (ctx) => {};
