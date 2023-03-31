

var mongoose=require('mongoose');


const spaSchema = new mongoose.Schema({
    imgurl: String,
    name: String
})
 
const Spa =  mongoose.model("Spa", spaSchema)
module.exports = Spa;