const adminAddProducts= require("../models/admin-add-products-models");

const AdminAddProducts= async (req,res)=>{
    try {
        
        const response = req.body;
        await adminAddProducts.create(response);
        res.status(200).json({ msg: "Admin Add products successfully" });

    } catch (error) {
        res.status(500).json({ msg: "Admin Product not Added" });
    }
}


module.exports=AdminAddProducts;