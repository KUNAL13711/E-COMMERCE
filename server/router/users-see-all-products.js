const express= require('express');
const router=express.Router();
const USeeAllProducts= require("../controllers/users-See-AllProducts-controller");





//*----------------------------------------*
// Create route for users see all products//
//*---------------------------------------*
router.route("/usersSeeAllProducts").get(USeeAllProducts); 




module.exports = router;