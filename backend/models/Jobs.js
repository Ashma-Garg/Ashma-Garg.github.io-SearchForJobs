var mongoose=require('mongoose');

var JobsSchema=mongoose.Schema({
    ClientId:{
        type:String,
        required:true
    },
    CandidateId:[
        {candid:
        {
        type:String
        },
        isAccepted:{
            type:String
        }
        }
    ],

    JoiningDate:{
        required:true,
        type:Date

    },
    Company:{
        required:true,
        type:String
    },
    Designation:{
        required:true,
        type:String

    },
    Salary:{
        required:true,
        type:String

    },
    Location:{
        required:true,
        type:String

    },
    Desc:{
        required:true,
        type:String

    },


});

module.exports=new mongoose.model("Jobs",JobsSchema);