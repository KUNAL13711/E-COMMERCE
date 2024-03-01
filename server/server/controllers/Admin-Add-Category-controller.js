const adminAddCategory= require("../models/admin-add-category-models");

const AdminAddCategory= async (req,res)=>{
    try {
        
        const response = req.body;
        await adminAddCategory.create(response)
        res.status(200).json({ msg: "Admin Add category successfully" });

    } catch (error) {
        res.status(500).json({ msg: "No Added Category" });
    }
}


module.exports=AdminAddCategory;