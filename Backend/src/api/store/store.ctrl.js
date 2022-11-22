import Store from "../../models/store.js";

export const readMainNames = async (ctx) => {
  try {
    const codes = await Store.find().distinct("main_code").exec();
    const result = await Promise.all(
      codes.map(async (code) => {
        const { main_name } = await Store.findOne(
          { main_code: code },
          { main_name: 1, _id: 0 }
        ).exec();
        return {
          main_code: code,
          main_name: main_name,
        };
      })
    );
    if (!codes) {
      ctx.status = 404;
      return;
    }
    ctx.body = result;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const readMiddleNames = async (ctx) => {
  const { code } = ctx.params;
  try {
    const middles_code = await Store.distinct("middle_code", {
      middle_code: { $regex: code },
    }).exec();
    const result = await Promise.all(
      middles_code.map(async (code) => {
        const { middle_name } = await Store.findOne(
          { middle_code: code },
          { middle_name: 1, _id: 0 }
        ).exec();
        return {
          middle_code: code,
          middle_name: middle_name,
        };
      })
    );
    if (!middles_code) {
      ctx.status = 404;
      return;
    }
    ctx.body = result;
  } catch (e) {
    ctx.throw(500, e);
  }
};
