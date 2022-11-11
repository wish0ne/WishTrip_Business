import mongoose from "mongoose";

const { Schema } = mongoose;

const GeofenceSchema = new Schema({
  lat1: Number,
  lat2: Number,
  lng1: Number,
  lng2: Number,
});

const Geofence = mongoose.model("Geofence", GeofenceSchema);

export default Geofence;
