'use strict';

var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    ObjectId = Mongoose.Schema.Types.ObjectId;

var schema = new Schema ({
    name: { type: String, required: true, uniqueness: true },
    health: { type: Number, default: 100},
    weapons: [{ type: String }],
    abilities: [{ type: String}],
    zombiesKilled: [{ type:ObjectId, ref: "Zombie"}]
});

module.exports = Mongoose.model('Ninja,', schema);