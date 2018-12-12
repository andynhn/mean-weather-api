console.log("inside of server/config/routes.js")

const path = require('path');

module.exports = function(app) {
    app.get('/', function(req, res) {
        
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("../weather_api/public/dist/public/index.html"))
    });
}