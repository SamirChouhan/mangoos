const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://localhost:27017/studentsapi",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Connection Establish Successfully");
})
.catch((err)=>{
    console.log(err)
});
