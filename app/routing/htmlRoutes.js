var path = require('path');

module.exports = function(app) {
    // A GET route to display all possible friends
    app.get('/survey', function(request, response) {
        response.sendFile(path.join(__dirname + '../public/survey.html'));
    });

    // A default USE route that leads to home.html
    app.use(function(request, response) {
        response.sendFile(path.join(__dirname + '../public/home.html'));
    });

};