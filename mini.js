const mongoose=require("mongoose");

const ud=new mongoose.Schema ({

username: {

type:String

},

password:{

type:String

}

})

const user1=mongoose.model("user1",ud);
module.exports=user1;