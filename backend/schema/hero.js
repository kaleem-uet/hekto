const mongoose = require("mongoose");
const express = require("express");

const HeroSchema=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    img_url:{
        type:String,
        require: true,
    }
})

module.exports = mongoose.model("Hero", HeroSchema);
