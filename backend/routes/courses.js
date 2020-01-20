const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send([
        { id: "1", course: "React Tut", tag: "reactjs"},
        { id: "2", course: "Javascript Tut", tag: "reactjs"},
        { id: "3", course: "Mongodb Tut", tag: "reactjs"}
    ]);
});

router.get("/1", (req, res) => {
    res.send("course 1");
});

router.post("/", (req, res) => {
    const mycourse = new Course({
        course: req.body.couse,
        tag: req.body.tag
    });
    mycourse
        .save()
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;