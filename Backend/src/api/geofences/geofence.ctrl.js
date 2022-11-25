import Geofence from "../../models/geofence.js";
import Store from "../../models/store.js";

export const readGeofence = async (ctx) => {
  try {
    const data = await Geofence.find().exec();
    if (!data) {
      ctx.status = 404;
      return;
    }
    const result = await Promise.all(
      data.map(async ({ lat, lng }) => {
        const count = await Store.find({
          longitude: { $gte: lng, $lte: lng + 0.01 },
          latitude: { $gte: lat, $lte: lat + 0.01 },
        }).count();
        return {
          latitude: lat,
          longitude: lng,
          count,
        };
      })
    );
    ctx.body = result;
  } catch (e) {
    ctx.throw(500, e);
  }
};
