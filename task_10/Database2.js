"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var L_Endabgabe;
(function (L_Endabgabe) {
    let highscores;
    let databaseURL;
    let dbName = "dbName";
    let dbCollection = "dbCollection";
    databaseURL = "mongodb+srv://melina:eia@cluster0-ofcws.mongodb.net/test?retryWrites=true&w=majority";
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    startServer(port);
    connectToDataBase(databaseURL);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on port:" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDataBase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        highscores = mongoClient.db(dbName).collection(dbCollection);
        console.log("Database connection ", highscores != undefined);
    }
    async function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.query["command"] == "retrieve") {
                let report = await retrieveOrders();
                if (report == "null")
                    _response.write(report);
                else
                    _response.write(JSON.stringify(report));
            }
            else {
                console.log("urlQuery: ", url.query);
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                highscores.insert(url.query);
                console.log(jsonString);
            }
        }
        _response.end();
    }
    async function retrieveOrders() {
        let cursor = await highscores.find().sort({ highScore: -1 }); ///
        let answer = await cursor.toArray();
        console.log("DB CursorToArray", answer);
        if (answer != null) {
            return answer;
        }
        else
            return "null";
    }
})(L_Endabgabe = exports.L_Endabgabe || (exports.L_Endabgabe = {}));
//# sourceMappingURL=Database2.js.map