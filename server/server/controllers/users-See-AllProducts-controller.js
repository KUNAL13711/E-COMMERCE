const usersSeeAllProducts= require("../models/admin-add-products-models");

const USeeAllProducts= async(req,res)=>{


    try {
           const response = await usersSeeAllProducts.find();
           
           if(!response){
            res.status(404).json({msg:"no service found"});
            return;
           }
           res.status(200).json({msg:response})
             
        
    } catch (error) {
        console.log(`services:${error}`);
    }
}
module.exports= USeeAllProducts;