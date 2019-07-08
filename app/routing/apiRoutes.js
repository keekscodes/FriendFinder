var friends = require("../data/friends");

module.exports = function(app) {
    // Return friends found in friends.js 
    app.get("/api/friends", function(request, response) {
        response.json(friends);
    });

    app.post("/api/friends", function(request, response) {
        console.log(request.body.scores);

        var user = request.body;

        for (let i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        // default friend match is first friend, result will be friend with closest scores
        var bffIndex = 0;
        var minimumDifference = 40;

        //  add to the total difference
        for (let i = 0; i < friends.length; i++) {
            let totalDifference = 0;
            for (let j = 0; j < friends[i].scores.length; j++) {
                let difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }

            // if change, change the bf index 
            if (totalDifference < minimumDifference) {
                bffIndex = i;
                minimumDifference = totalDifference;
            }
        }

        // after finding match, add user to friend array
        friends.push(user);

        // send back to browser the best friend match
        response.json(friends[bffIndex]);
    });
};