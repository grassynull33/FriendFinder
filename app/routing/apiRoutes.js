var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);
    var user = req.body;

    var bestFriendIndex = 0;
    var minimumDifference = 40;

    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      console.log(friends[i].name);
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
        console.log(difference);
      }
      console.log("total: "+totalDifference);
      if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }
    
    console.log(friends[bestFriendIndex]);

    friends.push(req.body);

    res.json(friends[bestFriendIndex]);

    console.log(friends);
  });
};