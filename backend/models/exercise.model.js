const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true},
    duration: { type: Date, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Exercise = mongoose.model('Exercicse', exerciseSchema);

module.exports = Exercise;