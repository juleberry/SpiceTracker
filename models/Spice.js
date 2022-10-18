const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spiceSchema = new Schema({
  name: { type: String, required: true },
  size: { type: String, required: true },
  qty: { type: Number, required: true },
  expDate: { type: Date, required: false}
})

module.exports = mongoose.model('Spice', spiceSchema);