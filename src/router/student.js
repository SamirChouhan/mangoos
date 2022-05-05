const express = require('express');
const router = new express.Router();
const Student = require("../model/student")

router.get("/api",(req,res)=>{
    res.send("Hello api")
});

//promises .then and .catch
// router.post("/student", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     })
//         .catch((err) => {
//             console.log(err)
//             res.status(400).send(err);
//         })
// });

//async and await
router.post("/student", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save()
        res.status(201).send("Data Insert Successfully");
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err);
    }
})


router.get("/student", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
})

router.get("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const Studentdata = await Student.findById({ _id })
        if (!Studentdata) {
            return res.status(404).send();
        }
        else {
            res.send(Studentdata);
        }
    }
    catch (err) {   
        res.status(500).send(err)
        console.log(err)
    }
});

router.post("/student/signin", async (req, res) => {
    try {
        // const email = req.params.email;
        const name = req.body.name;
        const email = req.body.email;
        
        const Studentdata = await Student.findOne({ email:email })
        if (!Studentdata) {
            return res.status(404).send("Invalid User");
        }
        else {
            res.send(Studentdata);
        }
    }
    catch (err) {   
        res.status(500).send(err)
        console.log(err)
    }
});
router.patch("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updateStudent)
    }
    catch(err) {
        res.status(404).send(err)
    }
})

router.delete("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const delStudent = await Student.findByIdAndDelete(_id);
        if(!_id){
            return res.status(400).send();
        }
        res.status(200).send("Data deleted successfully...")
    }
    catch (err) {
        console.log(err)
    }
})


module.exports = router