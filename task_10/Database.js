"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
var L_10;
(function (L_10) {
    let server = Http.createServer();
    console.log(server);
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Server starting on port: " + port);
    server.listen(port);
    server.addListener("request", handleRequest); // wenn du eine Request erhälst rufe handlerequest auf
    function handleRequest(_request, _response) {
        console.log("What's up?");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow_Origin", "*");
        _response.write("This is my response");
        if (_request.url) {
            let url = Url.parse(_request.url, true); //übersetzen, lesbares assoziatives Array durch true
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>"); // Werte ausgeben Zeichenkette
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.end();
    }
})(L_10 = exports.L_10 || (exports.L_10 = {}));
/*
interface DatabaseClient {

  [type: string]: string | string[];
}

let orders: Mongo.Collection;

let port: number | string | undefined = process.env.PORT;
if (port == undefined)
  port = 5001;

let databaseUrl: string = "mongodb://..";

window.addEventListener("load", init);
let serverAddress: string = "https:...";

function init(_event: Event): void {
  console.log("Init");

}

function insert(_event: Event): void {
  let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
  let query: string = "command=insert";
  query += "&name=" + inputs[0].value;
  query += "&score=" + document.getElementById("endscore").getAttribute("value");
  sendRequest(query, handleInsertResponse);
  refresh(_event);
} */ 
//# sourceMappingURL=Database.js.map