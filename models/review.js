const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: String,
  rate: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdtAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Review", reviewSchema);
