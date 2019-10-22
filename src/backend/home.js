// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const HomeSchema = new Schema(
  {
    id: Number,
    address: String,
    bd: Number,
    ba: Number,
    sqft: Number,
    value: Number,
    
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Home", HomeSchema);