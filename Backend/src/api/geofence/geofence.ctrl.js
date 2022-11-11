import Geofence from "../../models/geofence.js";

//geofence 데이터 생성
const geofence_data = [];
//대한민국 위도 : 125.06666667-131.87222222 / 경도 : 33.10000000-38.45000000
export const create = async (ctx) => {
  for (let i = 125; i <= 132; i += 0.05) {
    for (let j = 33; j <= 39; j += 0.05) {
      const data = new Geofence({
        lat1: j.toFixed(2),
        lat2: (j + 0.05).toFixed(2),
        lng1: i.toFixed(2),
        lng2: (i + 0.05).toFixed(2),
      });
      geofence_data.push(data);
    }
  }
  try {
    await Geofence.insertMany(geofence_data);
    ctx.status = 200;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const read = (ctx) => {
  const { id } = ctx.params;
};
