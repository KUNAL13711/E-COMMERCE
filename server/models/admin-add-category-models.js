const {Schema, model}=require("mongoose");

const AdminAddCategorySchema = new Schema({
    title:{type: String, required:true},
    description:{type: String, required:true},
   
    

});

// create model or collection


const adminAddCategory = new model ('adminAddCategory ', AdminAddCategorySchema );
module.exports = adminAddCategory ;
