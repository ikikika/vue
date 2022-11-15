var http = require('http');
var fs = require('fs');

// Create a server object
http
  .createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var url = req.url;

    if (url === '/coaches') {
      if (req.method == 'GET') {
        fs.readFile('./coaches.json', (err, data) => {
          res.end(JSON.stringify(JSON.parse(data), null, 3));
        });
      } else if (req.method == 'POST') {
        fs.readFile('./coaches.json', (err, data) => {
          var coachData = JSON.parse(data);

          req.on('data', function (chunk) {
            var receivedData = JSON.parse(chunk);
            receivedData.id = 'c' + Date.now();
            coachData.push(receivedData);

            fs.writeFile(
              './coaches.json',
              JSON.stringify(coachData),
              function () {
                res.end('ok');
              }
            );
          });
        });
      }
    } else if (url === '/login') {
      fs.readFile('./users.json', (err, data) => {
        var userData = JSON.parse(data);

        req.on('data', function (chunk) {
          var receivedData = JSON.parse(chunk);

          userData.find((user) => {
            if (
              user.username === receivedData.username &&
              user.password === receivedData.password
            ) {
              res.end(JSON.stringify({ token: user.id }));
            } else {
              res.end('no user');
            }
          });
        });
      });
    } else {
      res.write('Hello World!');
      res.end();
    }
  })
  .listen(8000, function () {
    // The server object listens on port 3000
    console.log('server start at port 8000');
  });
