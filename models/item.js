const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ItemSchema = new Schema(
  {
    name: { type: String, required: true, max: 100},
    description: { type: String, required: true, max: 1000},
    category: { type: Schema.Types.ObjectId, ref: 'Category'},
    price: { type: mongoose.Decimal128, },
    quantity: { type: Number}
  }
);

ItemSchema
.virtual('price_formatted')
.get(function() {
  return `$${this.price.toFixed(2)}`;
})

ItemSchema
.virtual('url')
.get(function() {
  return `/items/${this.id}`;
});

module.exports = mongoose.model('Item', ItemSchema);