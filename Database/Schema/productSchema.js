const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  categoryName: {
    type: String,
  },
  categoryId: {
    type: String,
  },
  image: {
    type: Array,
  },
  sold: {
    type: Boolean,
  },
  approved: {
    type: Boolean,
  },
});

module.exports = productSchema;
