var express = require('express');

var configureServer = function() {
    var server = express.createServer(    );

    server.configure(
        function() {
            //any static file from the static directory, just return it to user if requested
            server.use(express.static('public'));
        }
    );
    return server;
};

var port = process.env.PORT || 3000;
var server = configureServer();

server.get("/secret",
    function (req, res) {
        res.send("tomato")
    }
);

//Catch every url call and redirect to index.html
server.get(/^.*$/,
    function (req, res) {
        res.redirect("index.html");
    }
);

server.listen(port);
console.log("listening on port "+port);