import mongoose from "mongoose";
const { Schema } = mongoose;

const GeofenceSchema = new Schema(
  {
    lat: Number,
    lng: Number,
  },
  { collection: "geofences" }
);

const Geofence = mongoose.model("Geofence", GeofenceSchema);

export default Geofence;
