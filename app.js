const express = require('express')
const app = express()
const port = 5000
var bodyParser = require('body-parser');
const mongoose=require("mongoose");


app.use(bodyParser.urlencoded({
  extended: true
}))
mongoose.Promise = Promise;
mongoose.set("debug", true);


mongoose.connect('mongodb://localhost/vishal');

const Feedback = require('./Models/feedback');

app.post('/', async(req, res) => {

  const rating = req.body.rating;
  const reason = req.body.reason;
  rating<5 ? reason1=reason : reason1="";

  var newUser = Feedback({
    rating: rating,
    reason: reason1
  });
  
  newUser.save(function(err, data) {
    if (err){ 

      res.status(200).json({
        status: 200,
        error: true,
    });

       }
  
    else{
      res.status(200).json({
        status: 200,
        error: false,
        result: data
    });
    }
  });


//   let feedbackObj = {rating};

                   
//   let feedback = new Feedback(feedbackObj);

//   if(rating<5){
//     feedback.reason = reason;
//   }

//   feedback.save()
//   .then(data => {
//     res.status(200).json({
//             status: 200,
//             error: false,
//             result: data
//       });
//   }).catch(err=>{
//       return res.status(500).json({
//           error: true,
//           errors: [{
//               param: "DB_ERROR",
//               msg: err.message
//           }]
//       });
// })

  


})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})