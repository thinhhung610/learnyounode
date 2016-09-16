var http = require('http');
var url = require('url');

var parseTime = function(datetime) {
	var date = new Date(datetime);
	return {
		hour : date.getHours(),
		minute : date.getMinutes(),
		second : date.getSeconds()
	};
};

var unixTime = function(datetime) {
	return {
		unixtime : new Date(datetime).getTime()
	};
};

var server = http.createServer((req, res) => {
	var urlObj = url.parse(req.url, true);

	res.writeHead(200, { 'Content-Type': 'application/json' });

	if(urlObj.pathname === '/api/parsetime') {
		res.write(JSON.stringify(parseTime(urlObj.query.iso)));
	}
	else if(urlObj.pathname === '/api/unixtime') {
		res.write(JSON.stringify(unixTime(urlObj.query.iso)));
	}

	res.end();
});

server.listen(Number(process.argv[2]));