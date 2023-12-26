const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shiftSchema = new Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    reservedBy: { type: Number }
})

const Shift = mongoose.model('Shift', shiftSchema, 'Shifts');

module.exports = { Shift };