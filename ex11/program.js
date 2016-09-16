var http = require('http');
var map = require('through2-map');

var server = http.createServer((req, res) => {
	if(req.method != 'POST') {
		return res.end('Send me a POST request\n');
	}

	var truncate = map((chunk) => {
		return chunk.toString().toUpperCase();
	});
	req.pipe(truncate).pipe(res);
});

server.listen(process.argv[2]);