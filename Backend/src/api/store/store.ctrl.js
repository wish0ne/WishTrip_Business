import Store from "../../models/store.js";

export const readMainCategory = async (ctx) => {
  try {
    const codes = await Store.find().distinct("main_code").exec();
    const result = await Promise.all(
      codes.map(async (code) => {
        const { main_name } = await Store.findOne(
          { main_code: code },
          { main_name: 1, _id: 0 }
        ).exec();
        return {
          code: code,
          name: main_name,
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

export const readMiddleCategory = async (ctx) => {
  const { code } = ctx.params;
  try {
    const middle_codes = await Store.distinct("middle_code", {
      middle_code: { $regex: code },
    }).exec();
    const result = await Promise.all(
      middle_codes.map(async (code) => {
        const { middle_name } = await Store.findOne(
          { middle_code: code },
          { middle_name: 1, _id: 0 }
        ).exec();
        return {
          code: code,
          name: middle_name,
        };
      })
    );
    if (!middle_codes) {
      ctx.status = 404;
      return;
    }
    ctx.body = result;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const readSubCategory = async (ctx) => {
  const { code } = ctx.params;
  try {
    const sub_codes = await Store.distinct("sub_code", {
      sub_code: { $regex: code },
    }).exec();
    const result = await Promise.all(
      sub_codes.map(async (code) => {
        const { sub_name } = await Store.findOne(
          { sub_code: code },
          { sub_name: 1, _id: 0 }
        ).exec();
        return {
          code: code,
          name: sub_name,
        };
      })
    );
    if (!sub_codes) {
      ctx.status = 404;
      return;
    }
    ctx.body = result;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const readStores = async (ctx) => {
  const { code } = ctx.params;
  try {
    let result;
    if (code.length === 1) {
      result = await Store.find(
        { main_code: { $regex: code } },
        { longitude: 1, latitude: 1 }
      );
    } else if (code.length === 3) {
      result = await Store.find(
        { middle_code: { $regex: code } },
        { longitude: 1, latitude: 1 }
      );
    } else if (code.length === 6) {
      result = await Store.find(
        { sub_code: { $regex: code } },
        { longitude: 1, latitude: 1 }
      );
    }
    if (!result) {
      ctx.status = 404;
      return;
    }
    ctx.body = result;
  } catch (e) {
    ctx.throw(500, e);
  }
};
