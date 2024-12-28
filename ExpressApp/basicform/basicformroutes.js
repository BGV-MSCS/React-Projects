const express = require('express');
const router = express.Router();
router.post('/formdata', async(req,res)=>{
    console.log("Resume data:", req.body.resume)
    if(req.body.firstName.length > 0){
        return res.status(200).json({ message: "Server: Account Created" });
    }
    return res.status(400).json({ message: "Server: Something Went Wrong" });
 });
module.exports = router;
