const mongoose=require("mongoose");

const ratings = [1, 2, 3, 4, 5];
const reasons = ["reason1", "reason2", "reason3", "reason4", "reason5", ""];

const feedbackSchema =new mongoose.Schema({
    rating : {type: String, required: true, enum :ratings },
    reason: {type: String, default:"", enum: reasons }
}); 

module.exports=mongoose.model("feedback", feedbackSchema);