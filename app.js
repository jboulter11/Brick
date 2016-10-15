var Particle = require('particle-api-js')
var particle = new Particle();

particle.login({username: 'cyou97@gmail.com', password: 'asdf1234'}).then(
	function(data){
		console.log('API call completed on promise resolve: ', data.body.access_token);
	},
	function(err) {
		console.log('API call completed on promise fail: ', err);
	}
);
