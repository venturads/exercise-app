const mongoose = require("mongoose");

const CoursesSchema = mongoose.Schema({
    course: String,
    tag: String,
    date: Date.now
});

module.exports = mongoose.model("Courses", CoursesSchema);