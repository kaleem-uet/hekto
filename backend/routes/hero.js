const express=require("express");
const mongoose=require("mongoose");
const router = express.Router();
const Hero =require('../schema/hero')


// hero add
router.post("/hero",async (req,res)=>{
    const newHero=new Hero(req.body);
    try {
       const saveHero = await newHero.save();
       res.status(200).json(saveHero);
     } catch (err) {
       res.status(500).json(err);
     }
   })
