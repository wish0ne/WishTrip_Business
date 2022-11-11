import Geofence from "../../models/geofence.js";

//geofence 데이터 생성
const geofence_data = [];
//대한민국 경도 : 125.06666667-131.87222222 / 위도 : 33.10000000-38.45000000
//서울 위도 : 37.715133 - 37.413294 / 경도 : 127.269311 - 126.734086
export const create = async (ctx) => {
  for (let i = 126.73; i <= 127.27; i += 0.01) {
    for (let j = 37.42; j <= 37.72; j += 0.01) {
      const data = new Geofence({
        lat: j.toFixed(2),
        lng: i.toFixed(2),
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

export const read = async (ctx) => {
  try {
    const geofence = await Geofence.find().exec();
    ctx.body = geofence;
    ctx.status = 200;
  } catch (e) {
    ctx.throw(500, e);
  }
};
