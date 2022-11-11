import mongoose from "mongoose";

const { Schema } = mongoose;

const StoreSchema = new Schema({
  geofenceId: Number,
  big: String,
  medium: String,
  small: String,
});

const Store = mongoose.model("Store", StoreSchema);

export default Store;
