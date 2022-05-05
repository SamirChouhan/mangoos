const express = require('express');
const app = express();
const cors = require('cors');
require("./db/conn.js");
const StudentRouter = require("./router/student");
// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'samir04001@gmail.com',
//       pass: '04001822samir'
//     }
//   });
// var mailOptions = {
//     from: 'samir04001@gmail.com',
//     to: 'samir.chouhan@speedlabs.in',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// };
// transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });


// app.use(express.json());
app.use(express.json())

app.use(cors());

app.use(StudentRouter);
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from mongo")
})

app.listen(port, () => {
    console.log(`PORT is setup at ${port}`);
});