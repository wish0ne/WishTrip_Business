import mongoose from "mongoose";

const { Schema } = mongoose;

const StoreSchema = new Schema(
  {
    main_code: String,
    main_name: String,
    middle_code: String,
    middle_name: String,
    sub_code: String,
    sub_name: String,
    longitude: Number,
    latitude: Number,
  },
  { collection: "store" }
);

const Store = mongoose.model("Store", StoreSchema);

export default Store;
