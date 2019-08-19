var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationsSchema = new Schema({
    airport: {type: String, required: true, enum: ['AUS', 'DAL','LAX', 'SEA']},
    arrival: {type:Date}


})

var flightSchema = new Schema({
    airline: {type: String, required:true, enum: ['American', 'Southwest', 'United']},
    flightNo:{type: Number, min: 10, max:9999, required: true },
    departs:{type: Date, default: Date.now() + 365*24*60*60*1000},
    airport: {type: String, required: true, enum: ['AUS', 'DAL','LAX', 'SEA'], default: 'SEA'},
    destinations: [destinationsSchema]




});


module.exports = mongoose.model('Flight', flightSchema);