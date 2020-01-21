const express = require("express");
const router = express.Router();

const Course = require("../models/Course");

require("dotenv/config");

// router.get("/", (req, res) => {
//     res.send([
//         { id: "1", course: "React Tut", tag: "reactjs"},
//         { id: "2", course: "Javascript Tut", tag: "reactjs"},
//         { id: "3", course: "Mongodb Tut", tag: "reactjs"}
//     ]);
// });

router.get("/dbases", (req, res) => {
    Course.find()
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json({ message: err });
    });
});

router.get("/list", (req, res) => {
    res.send(
    async function findOneDocByName(client, nameDoc){
        result = await client.db("test").collection("courses").findOne({ course: nameDoc });

        if (result) {
            console.log(`Found a listing in the collection with the name '${nameDoc}':`);
            console.log(result);
        } else {
            console.log(`No listings found with the name '${nameDoc}'`);
        }
    });

    findOneDocByName(client, "reactjs and mongodb");

});

router.post("/", (req, res) => {
    const mycourse = new Course({
        course: req.body.course,
        tag: req.body.tag
    });

    mycourse
        .save()
        .then(result => {
            res.status(201).json({
                message: "post request",
                result
            })
            console.log(result);
        })
        .catch(err => {
            res.status(500).json({ message: err });
            console.log(err);
        });
});

module.exports = router;