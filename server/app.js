let express = require('express');
let app = express();

app.get('/', function (request, response) {
    response.send('Hello World');
});

let server = app.listen(4002, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});