var express = require("express")
var router = express.Router()
var friends = require("../data/friends")

router.get("/friends", function(req, res) {
    res.json({
        friends: friends
    });
})

router.post("/friends", function(req, res) {
    var mySurvey = Object.values(req.body)
    var distances = []
    for (let i = 0; i < friends.length; i++) {
        var distance = 0;
        for (let j = 0; j < 10; j++) {
            distance = distance + Math.abs(friends[i].scores[j] - parseInt(mySurvey[j]))
        }
        distances.push(distance)
    }
    
    var lowestDistanceIndex = 0;
    for (let i = 0; i < distances.length; i++) {
        if (distances[i] < distances[lowestDistanceIndex]) {
            lowestDistanceIndex = i;
        }
    }
    res.json({
        friends: friends[lowestDistanceIndex]
    });
})


module.exports = router