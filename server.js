var Mongoose = require('mongoose'),
    express = require('express'),
    bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

Mongoose.connect('mongodb://localhost/ZomVsNin');

var Ninja = require('./lib/models/ninja'),
    Zombie = require('./lib/models/zombie');

app.listen(8484, function(){
    console.log("8484");
});

app.get('/v1/zombies', function(req, res){
    Zombie.find(function(err, zombies){
       if(!err){
           res.status(200).json(zombies);
       }
    });
});

app.post('/v1/zombies/create', function(req, res) {
    var aZombie = new Zombie({
        name: req.body.name,
        appendages: req.body.appendages,
        abilities: req.body.abilities
    });
    aZombie.save(function (err){
        if (err) {
            throw err;
        }
    });
    res.status(200).json("Saved!");
});

app.get('/v1/zombies/:name', function(req, res) {
   Zombie.find({name: req.param('name')}, function(err, zombie){
       if(!err){
           res.status(200).json(zombie);
       }
   })
});