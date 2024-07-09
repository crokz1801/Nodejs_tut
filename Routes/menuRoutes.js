const express= require('express');
const router = express.Router();
const menu = require("./../models/menu");

router.post("/", async (req, res) => {
    try {
      const data = req.body;
  
      const newMenu = new menu(data);
      const response = await newMenu.save();
      console.log("data successfully saved");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: "internal server error" });
    }
  });

  
router.get("/", async (req, res) => {
    try {
      const data = await menu.find();
      console.log("data fetched");
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ err: "internal server error" });
    }
  });

  router.get('/:menuType',async(req,res)=>{
    try{ 
       const menuType = req.params.menuType;
       if(menuType=='spicy'||menuType=='salty'||menuType=='sweet'){
        const response = await menu.find({taste:menuType});
        console.log('data fetched !');
        res.status(200).json(response);
  
       }else{
        res.status(404).json({error: 'invalid menu type'});
       }
  
    }catch(err){
      console.log(err);
      res.status(500).json(err);
  
    }
   
  })


  module.exports=router;