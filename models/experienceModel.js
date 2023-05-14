const mongoose = require('mongoose');


const experienceSchema = new mongoose.Schema({


company_name:{
    type:String,
    required:true
},
location:{
    type:String,
    required:true
},
start_and_end:{
    type:String,
    required:true
},
job_title:{
    type:String,
    required:true
},
technology:{
    type:String,
    required:true
}

})


module.exports = mongoose.model('expreience', experienceSchema);