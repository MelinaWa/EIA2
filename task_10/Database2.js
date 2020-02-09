"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var L_10;
(function (L_10) {
    let highscorenames;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let databaseUrl = "mongodb://localhost27017";
    startServer(port);
    connectToDataBase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on point:" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDataBase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        highscorenames = mongoClient.db("CocktailBar").collection("Orders");
        console.log("Database connection ", highscorenames != undefined);
    }
    function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            storeNameAndScore(url.query);
        }
        _response.end();
    }
    function storeNameAndScore(_highscorenames) {
        highscorenames.insert(_highscorenames);
    }
})(L_10 = exports.L_10 || (exports.L_10 = {}));
//# sourceMappingURL=Database2.js.map