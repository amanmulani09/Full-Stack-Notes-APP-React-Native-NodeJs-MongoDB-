const router = require('express').Router();
const userSchema = require('../models/User');


router.get('/login',(req,res)=>{
    
})

router.post('/register',async(req,res)=>{

   const user = new userSchema({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
   });

   try{
    const userData = await user.save();
    res.status(200).json(userData);
   }catch(error){
        res.status(500).json(error);
   }

})

module.exports = router;