const mongoose = require("mongoose")


const model = mongoose.Schema({
    name:{
type: String,
required: true,
    },
course:{
type:String,
required: true,
    },
})

module.exports = mongoose.model("data", model);