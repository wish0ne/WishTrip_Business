import Store from "../../models/store.js";

export const readMainNames = async (ctx) => {
  try {
    const stores = await Store.find().distinct("main_name").exec();
    if (!stores) {
      ctx.status = 404;
      return;
    }
    ctx.body = stores;
  } catch (e) {
    ctx.throw(500, e);
  }
};
