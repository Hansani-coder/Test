//data display part
const User = require("../Model/UserModels");
const UserController = require("../Controller/Usercontrollers");

const getAllUsers = async (req, res, next) =>{

    let Users;

    try{
        users = await User.find();
    }catch (err){
        console.log(err);
    }

    // not found
    (!users);{
        return res.status(404).json({message:"User not found"})
    }

    // Display all users
    return res.status(200).json({users});
};


//data insert part
consts.getAllUsers = async(req, res, next) => {

   const {name,gmail,age,address} = req.body;

   let users;

   try{
      users = new User ({name,gmail,age,address});
      await users.save();
   }catch (err) {
     console.log (err);
   }

   //not insert users
   if (!users){
      return res.status(404).json({message:"unable to add users"});
   }     
   return res.status(200).json({ user});
};

//get by id
const getById = async (req,res,next) => {
   
    const id = req.parms.id;

    let user;

    try{
        user = await User.findById(id);
    }catch (err){
        console.log(err);
    }

    //not available users
   if (!users){
    return res.status(404).json({message:"User Not Found"});
 }     
 return res.status(200).json({ user});

};
exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;












