var http = require('http');
var fs = require('fs');

const PORT=8080;

var token;

function handleRequest(request, response) {
	// response.end('Int Works!! Path Hit: ' + request.url);

	if(request.url === '/') {
		fs.readFile('./index.html', function(error, content) {
			if(error) {
				response.writeHead(500);
				response.end();
			}
			else {
				response.writeHead(200, {'Content-Type': 'text/html'});
				response.end(content, 'utf-8');
			}
		});
	}
	// elseif(request.url === '/data') {
	// 	// Give jordan data
	//
	// }
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log('server listening on: http://localhost:%s', PORT);
});

var Particle = require('particle-api-js')
var particle = new Particle();

particle.login({username: 'cyou97@gmail.com', password: 'asdf1234'}).then(
	function(data){
		console.log('API call completed on promise resolve: ', data.body.access_token);
		token = data.body.access_token;

		particle.getEventStream({ deviceId: 'smart_brick', auth: token }).then(
			function(stream) {
  			stream.on('event', function(data) {
    			console.log("Event: " + data.name + " " + data.body);
  			});
			});
	},
	function(err) {
		console.log('API call completed on promise fail: ', err);
	}
);
