const { Schema, model } = require("mongoose");

const AdminAddProductsSchema = new Schema({
    date: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true }
});

const adminAddProducts = model('adminAddProducts', AdminAddProductsSchema);
module.exports = adminAddProducts;
