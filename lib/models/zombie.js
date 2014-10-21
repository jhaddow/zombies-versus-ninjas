'use strict';

var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    ObjectId = Mongoose.Schema.Types.ObjectId;

var schema = Schema({
    name: { type: String, required: true, uniqueness: true, minLength: 1 },
    health: { type: Number, default: 100 },
    appendages: [{ type: String, enum: ['leg', 'arm', 'toe', 'face']}],
    abilities: [{ type: String }],
    ninjasEaten: [{ type: ObjectId, ref: 'Ninja' }]
});

module.exports = Mongoose.model('Zombie', schema);