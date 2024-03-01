const user1 = require("../models/user-models");
const adminproducts=require("../models/admin-add-products-models.js");



//import { useParams } from "react-router-dom";

//*------------------------------------*
//  admin using get all user logic   //
//*-----------------------------------*

const getAllUsers =async(req,res,next)=>{

     try {
        
        const users= await user1.find({},{password:0});

          if(!users || users.length === 0){
            res.status(404),json({message:"no users found"})
          }
          res.status(200).json(users);

     } catch (error) {

        /// using this logic error  forward backend to frontend
      next(error);



     }

}


//*------------------------------*
// updateUserData  fetch logic   //
//*------------------------------*
 
const updateUserData =async(req,res,next)=>{

try {
  const id = req.params.id;
  const updateUser=req.body;
  const updateUsers= await user1.updateOne({_id:id},{$set:updateUser});


  return res.status(200).json(updateUsers);
    


} catch (error) {
  next(error);
}
}



//*----------------------------*
// single data fetch logic   //
//*---------------------------*

const singleDataById= async(req, res,next) => {
   try {
         const id = req.params.id;

         const data = await user1.findOne({_id: id},{password:0});
         return res.status(200).json(data) ;

    
   } catch (error) {
    next(error);
   }
}

//*----------------------------*
//     Delete user logic        //
//*---------------------------*
const deleteUserById = async(req,res,next)=>{


       try {
        const id =  req.params.id;
        await user1.deleteOne ({_id:id});
         return res.status(200).json({message:"user deleted successfully"});
        
       } catch (error) {
        next(error)

       }
}

//*----------------------------------------*
//     ADMIN get all products logic        //
//*----------------------------------------*

const getAllproducts =async(req,res,next)=>{

  try {
     
     const products= await adminproducts.find({},{password:0});

       if(!products || products.length === 0){
         res.status(404),json({message:"no users found"})
       }
       res.status(200).json(products);

  } catch (error) {

     /// using this logic error  forward backend to frontend
   next(error);
  }
}

//*------------------------------*
//  aDMIN updateProductData      //
//*------------------------------*
 
const updateProductData =async(req,res,next)=>{

  try {
    const id = req.params.id;
    const updateProduct=req.body;
    const updateProducts= await adminproducts.updateOne({_id:id},{$set:updateProduct});
  
  
    return res.status(200).json(updateProducts);
      
  
  
  } catch (error) {
    next(error);
  }
  }

  //*----------------------------*
// single product fetch logic   //
//*---------------------------*

const singleProductById= async(req, res,next) => {
  try {
        const id = req.params.id;

        const data = await adminproducts.findOne({_id: id},{password:0});
        return res.status(200).json(data) ;

   
  } catch (error) {
   next(error);
  }
}

//*----------------------------*
//     Delete user logic        //
//*---------------------------*
const deleteProductById = async(req,res,next)=>{


  try {
   const id =  req.params.id;
   await adminproducts.deleteOne ({_id:id});
    return res.status(200).json({message:"user deleted successfully"});
   
  } catch (error) {
   next(error)

  }
}





module.exports = {
  getAllUsers,
  deleteUserById,
  singleDataById,
  updateUserData,
  getAllproducts,
  updateProductData,
  singleProductById,
  deleteProductById

 
};