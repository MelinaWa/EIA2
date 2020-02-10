import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace L_10 {

    interface Score {
        [type: string]: string | string[];
    }

    let highscorenames: Mongo.Collection;
    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

    let databaseUrl: string = "mongodb://localhost27017";

    startServer(port);
    connectToDataBase(databaseUrl);

    function startServer(_port: number | string): void {

        let server: Http.Server = Http.createServer();

        console.log("Server starting on point:" + _port);

        server.listen(_port);
        server.addListener("request", handleRequest);

    }

    async function connectToDataBase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        highscorenames = mongoClient.db("CocktailBar").collection("Orders");
        console.log("Database connection ", highscorenames != undefined);
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("What's up?");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }

            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

            storeNameAndScore(url.query);
        }

        _response.end();
    }

    function storeNameAndScore(_highscorenames: Score): void {
        highscorenames.insert(_highscorenames);
    }
}
